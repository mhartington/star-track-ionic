import { Injectable } from '@angular/core';
@Injectable()
export class ColorThiefProvider {
  constructor() { }

  // Adaptation of ColorThef : http://lokeshdhakar.com/projects/color-thief/
  getPalette(sourceImage, colorCount?: number, quality?: number) {
    if (
      typeof colorCount === 'undefined' ||
      colorCount < 2 ||
      colorCount > 256
    ) {
      colorCount = 10;
    }
    if (typeof quality === 'undefined' || quality < 1) {
      quality = 10;
    }

    // Create custom CanvasImage object
    var image = new CanvasImage(sourceImage);
    var imageData = image.getImageData();
    var pixels = imageData.data;
    var pixelCount = image.getPixelCount();

    // Store the RGB values in an array format suitable for quantize function
    var pixelArray = [];
    for (var i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
      offset = i * 4;
      r = pixels[offset + 0];
      g = pixels[offset + 1];
      b = pixels[offset + 2];
      a = pixels[offset + 3];
      // If pixel is mostly opaque and not white
      if (a >= 125) {
        if (!(r > 250 && g > 250 && b > 250)) {
          pixelArray.push([r, g, b]);
        }
      }
    }

    // Send array to quantize function which clusters values
    // using median cut algorithm
    var cmap = MMCQ.quantize(pixelArray, colorCount);
    var palette = cmap ? cmap.palette() : null;

    // Clean up
    image.removeCanvas();

    return palette;
  }
  getColor(sourceImage, quality = 10) {
    var palette = this.getPalette(sourceImage, 5, quality);
    var dominantColor = palette[0];
    return dominantColor;
  }
  getColorFromUrl(imageUrl, quality = 10) {
    return new Promise((resolve, reject) => {
      let sourceImage = new Image()
      sourceImage.crossOrigin = "Anonymous"
      let dominantColor, palette;
      sourceImage.addEventListener('load', () => {
        palette = this.getPalette(sourceImage, 5, quality);
        dominantColor = palette[0];
        resolve({ dominantColor, imageUrl });
      });
      sourceImage.src = imageUrl
      sourceImage.addEventListener('error', reject.bind(this))
    })
  };
}



var pv = {
  map(array, f?) {
    const o = {};
    return f
      ? array.map((d, i) => {
        o['index'] = i;
        return f.call(o, d);
      })
      : array.slice();
  },
  naturalOrder(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  },
  sum(array, f?) {
    const o = {};
    return array.reduce(
      f
        ? (p, d, i) => {
          o['index'] = i;
          return p + f.call(o, d);
        }
        : (p, d) => p + d,
      0
    );
  },
  max(array, f?) {
    return Math.max.apply(null, f ? pv.map(array, f) : array);
  }
};


const MMCQ = (() => {
  // private constants
  const sigbits = 5;

  const rshift = 8 - sigbits;
  const maxIterations = 1000;
  const fractByPopulations = 0.75;

  // get reduced-space color index for a pixel
  function getColorIndex(r, g, b) {
    return (r << (2 * sigbits)) + (g << sigbits) + b;
  }

  // Simple priority queue
  class PQueue {
    public contents = [];
    public sorted = false;
    constructor(public comparator) {

    }

    sort() {
      this.contents.sort(this.comparator);
      this.sorted = true;
    }
    push(o) {
      this.contents.push(o);
      this.sorted = false;
    }
    peek(index) {
      if (!this.sorted) this.sort();
      if (index === undefined) index = this.contents.length - 1;
      return this.contents[index];
    }
    pop() {
      if (!this.sorted) this.sort();
      return this.contents.pop();
    }
    size() {
      return this.contents.length;
    }
    map(f) {
      return this.contents.map(f);
    }
    debug() {
      if (!this.sorted) this.sort();
      return this.contents;
    }
  }

  // 3d color space box
  class VBox {
    r1;
    r2;
    g1;
    g2;
    b1;
    b2;
    histo;
    _avg;
    _count_set;
    _count;
    _volume;
    constructor(r1, r2, g1, g2, b1, b2, histo) {
      this.r1 = r1;
      this.r2 = r2;
      this.g1 = g1;
      this.g2 = g2;
      this.b1 = b1;
      this.b2 = b2;
      this.histo = histo;
    }

    volume(force) {
      if (!this._volume || force) {
        this._volume =
          (this.r2 - this.r1 + 1) *
          (this.g2 - this.g1 + 1) *
          (this.b2 - this.b1 + 1);
      }
      return this._volume;
    }

    count(force) {
      if (!this._count_set || force) {
        let npix = 0;
        let i;
        let j;
        let k;
        for (i = this.r1; i <= this.r2; i++) {
          for (j = this.g1; j <= this.g2; j++) {
            for (k = this.b1; k <= this.b2; k++) {
              let index = getColorIndex(i, j, k);
              npix += this.histo[index] || 0;
            }
          }
        }
        this._count = npix;
        this._count_set = true;
      }
      return this._count;
    }

    copy() {
      return new VBox(
        this.r1,
        this.r2,
        this.g1,
        this.g2,
        this.b1,
        this.b2,
        this.histo
      );
    }

    avg(force) {
      if (!this._avg || force) {
        let ntot = 0;
        const mult = 1 << (8 - sigbits);
        let rsum = 0;
        let gsum = 0;
        let bsum = 0;
        let hval;
        let i;
        let j;
        let k;
        let histoindex;
        for (i = this.r1; i <= this.r2; i++) {
          for (j = this.g1; j <= this.g2; j++) {
            for (k = this.b1; k <= this.b2; k++) {
              histoindex = getColorIndex(i, j, k);
              hval = this.histo[histoindex] || 0;
              ntot += hval;
              rsum += hval * (i + 0.5) * mult;
              gsum += hval * (j + 0.5) * mult;
              bsum += hval * (k + 0.5) * mult;
            }
          }
        }
        if (ntot) {
          this._avg = [~~(rsum / ntot), ~~(gsum / ntot), ~~(bsum / ntot)];
        } else {
          console.log('empty box');
          this._avg = [
            ~~(mult * (this.r1 + this.r2 + 1) / 2),
            ~~(mult * (this.g1 + this.g2 + 1) / 2),
            ~~(mult * (this.b1 + this.b2 + 1) / 2)
          ];
        }
      }
      return this._avg;
    }

    contains(pixel) {
      const rval = pixel[0] >> rshift;
      let gval = pixel[1] >> rshift;
      let bval = pixel[2] >> rshift;
      return (
        rval >= this.r1 &&
        rval <= this.r2 &&
        gval >= this.g1 &&
        rval <= this.g2 &&
        bval >= this.b1 &&
        rval <= this.b2
      );
    }
  }

  // Color map
  class CMap {
    vboxes;
    constructor() {
      this.vboxes = new PQueue((a, b) =>
        pv.naturalOrder(
          a.vbox.count() * a.vbox.volume(),
          b.vbox.count() * b.vbox.volume()
        )
      );
    }

    push(vbox) {
      this.vboxes.push({
        vbox,
        color: vbox.avg()
      });
    }

    palette() {
      return this.vboxes.map(vb => vb.color);
    }

    size() {
      return this.vboxes.size();
    }

    map(color) {
      const vboxes = this.vboxes;
      for (let i = 0; i < vboxes.size(); i++) {
        if (vboxes.peek(i).vbox.contains(color)) {
          return vboxes.peek(i).color;
        }
      }
      return this.nearest(color);
    }

    nearest(color) {
      const vboxes = this.vboxes;
      let d1;
      let d2;
      let pColor;
      for (let i = 0; i < vboxes.size(); i++) {
        d2 = Math.sqrt(
          (color[0] - vboxes.peek(i).color[0]) ** 2 +
          (color[1] - vboxes.peek(i).color[1]) ** 2 +
          (color[1] - vboxes.peek(i).color[1]) ** 2
        );
        if (d2 < d1 || d1 === undefined) {
          d1 = d2;
          pColor = vboxes.peek(i).color;
        }
      }
      return pColor;
    }

    forcebw() {
      // XXX: won't  work yet
      const vboxes = this.vboxes;
      vboxes.sort((a, b) => pv.naturalOrder(pv.sum(a.color), pv.sum(b.color)));

      // force darkest color to black if everything < 5
      const lowest = vboxes[0].color;
      if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
        vboxes[0].color = [0, 0, 0];

      // force lightest color to white if everything > 251
      const idx = vboxes.length - 1;

      const highest = vboxes[idx].color;
      if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
        vboxes[idx].color = [255, 255, 255];
    }
  }

  // histo (1-d array, giving the number of pixels in
  // each quantized region of color space), or null on error
  function getHisto(pixels) {
    const histosize = 1 << (3 * sigbits);
    const histo = new Array(histosize);
    let index;
    let rval;
    let gval;
    let bval;
    pixels.forEach(pixel => {
      rval = pixel[0] >> rshift;
      gval = pixel[1] >> rshift;
      bval = pixel[2] >> rshift;
      index = getColorIndex(rval, gval, bval);
      histo[index] = (histo[index] || 0) + 1;
    });
    return histo;
  }

  function vboxFromPixels(pixels, histo) {
    let rmin = 1000000;
    let rmax = 0;
    let gmin = 1000000;
    let gmax = 0;
    let bmin = 1000000;
    let bmax = 0;
    let rval;
    let gval;
    let bval;
    // find min/max
    pixels.forEach(pixel => {
      rval = pixel[0] >> rshift;
      gval = pixel[1] >> rshift;
      bval = pixel[2] >> rshift;
      if (rval < rmin) rmin = rval;
      else if (rval > rmax) rmax = rval;
      if (gval < gmin) gmin = gval;
      else if (gval > gmax) gmax = gval;
      if (bval < bmin) bmin = bval;
      else if (bval > bmax) bmax = bval;
    });
    return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
  }

  function medianCutApply(histo, vbox) {
    if (!vbox.count()) return;

    const rw = vbox.r2 - vbox.r1 + 1;
    const gw = vbox.g2 - vbox.g1 + 1;
    const bw = vbox.b2 - vbox.b1 + 1;
    const maxw = pv.max([rw, gw, bw]);
    // only one pixel, no split
    if (vbox.count() == 1) {
      return [vbox.copy()];
    }

    /* Find the partial sum arrays along the selected axis. */
    let total = 0;

    const partialsum = [];
    const lookaheadsum = [];
    let i;
    let j;
    let k;
    let sum;
    let index;
    if (maxw == rw) {
      for (i = vbox.r1; i <= vbox.r2; i++) {
        sum = 0;
        for (j = vbox.g1; j <= vbox.g2; j++) {
          for (k = vbox.b1; k <= vbox.b2; k++) {
            index = getColorIndex(i, j, k);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    } else if (maxw == gw) {
      for (i = vbox.g1; i <= vbox.g2; i++) {
        sum = 0;
        for (j = vbox.r1; j <= vbox.r2; j++) {
          for (k = vbox.b1; k <= vbox.b2; k++) {
            index = getColorIndex(j, i, k);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    } else {
      /* maxw == bw */
      for (i = vbox.b1; i <= vbox.b2; i++) {
        sum = 0;
        for (j = vbox.r1; j <= vbox.r2; j++) {
          for (k = vbox.g1; k <= vbox.g2; k++) {
            index = getColorIndex(j, k, i);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    }
    partialsum.forEach((d, i) => {
      lookaheadsum[i] = total - d;
    });
    function doCut(color) {
      const dim1 = `${color}1`;
      const dim2 = `${color}2`;
      let left;
      let right;
      let vbox1;
      let vbox2;
      let d2;
      let count2 = 0;
      for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
        if (partialsum[i] > total / 2) {
          vbox1 = vbox.copy();
          vbox2 = vbox.copy();
          left = i - vbox[dim1];
          right = vbox[dim2] - i;
          if (left <= right) d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
          else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
          // avoid 0-count boxes
          while (!partialsum[d2]) d2++;
          count2 = lookaheadsum[d2];
          while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
          // set dimensions
          vbox1[dim2] = d2;
          vbox2[dim1] = vbox1[dim2] + 1;
          return [vbox1, vbox2];
        }
      }
    }
    // determine the cut planes
    return maxw == rw ? doCut('r') : maxw == gw ? doCut('g') : doCut('b');
  }

  function quantize(pixels, maxcolors) {
    // short-circuit
    if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
      console.log('wrong number of maxcolors');
      return false;
    }

    // XXX: check color content and convert to grayscale if insufficient

    const histo = getHisto(pixels);

    // const histosize = 1 << (3 * sigbits);

    // check that we aren't below maxcolors already
    let nColors = 0;
    histo.forEach(() => {
      nColors++;
    });
    if (nColors <= maxcolors) {
      // XXX: generate the new colors from the histo and return
    }

    // get the beginning vbox from the colors
    const vbox = vboxFromPixels(pixels, histo);

    const pq = new PQueue((a, b) => pv.naturalOrder(a.count(), b.count()));
    pq.push(vbox);

    // inner function to do the iteration
    function iter(lh, target) {
      let ncolors = 1;
      let niters = 0;
      let vbox;
      while (niters < maxIterations) {
        vbox = lh.pop();
        if (!vbox.count()) {
          /* just put it back */
          lh.push(vbox);
          niters++;
          continue;
        }

        // do the cut
        const vboxes = medianCutApply(histo, vbox);

        const vbox1 = vboxes[0];
        const vbox2 = vboxes[1];

        if (!vbox1) {
          console.log("vbox1 not defined; shouldn't happen!");
          return;
        }
        lh.push(vbox1);
        if (vbox2) {
          /* vbox2 can be null */
          lh.push(vbox2);
          ncolors++;
        }
        if (ncolors >= target) return;
        if (niters++ > maxIterations) {
          console.log('infinite loop; perhaps too few pixels!');
          return;
        }
      }
    }

    // first set of colors, sorted by population
    iter(pq, fractByPopulations * maxcolors);
    // console.log(pq.size(), pq.debug().length, pq.debug().slice());

    // Re-sort by the product of pixel occupancy times the size in color space.
    const pq2 = new PQueue((a, b) =>
      pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume())
    );
    while (pq.size()) {
      pq2.push(pq.pop());
    }

    // next set - generate the median cuts using the (npix * vol) sorting.
    iter(pq2, maxcolors - pq2.size());

    // calculate the actual colors
    const cmap = new CMap();
    while (pq2.size()) {
      cmap.push(pq2.pop());
    }

    return cmap;
  }

  return {
    quantize
  };
})();
class CanvasImage {
  canvas;
  context;
  width;
  height;
  constructor(image: HTMLImageElement) {

    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.width = this.canvas.width = image.width;
    this.height = this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0, this.width, this.height);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  update(imageData) {
    this.context.putImageData(imageData, 0, 0);
  }

  getPixelCount() {
    return this.width * this.height;
  }

  getImageData() {
    return this.context.getImageData(0, 0, this.width, this.height);
  }

  removeCanvas() {
    this.canvas.parentNode.removeChild(this.canvas);
  }
}
