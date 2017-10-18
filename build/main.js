webpackJsonp([4],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu-list/menu-list.module": [
		273,
		3
	],
	"../pages/menu/menu.module": [
		274,
		2
	],
	"../pages/search/search.module": [
		275,
		0
	],
	"../pages/track-detail/track-detail.module": [
		276,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorThiefProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorThiefProvider = /** @class */ (function () {
    function ColorThiefProvider() {
    }
    // Adaptation of ColorThef : http://lokeshdhakar.com/projects/color-thief/
    ColorThiefProvider.prototype.getPalette = function (sourceImage, colorCount, quality) {
        if (typeof colorCount === 'undefined' ||
            colorCount < 2 ||
            colorCount > 256) {
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
    };
    ColorThiefProvider.prototype.getColor = function (sourceImage, quality) {
        if (quality === void 0) { quality = 10; }
        var palette = this.getPalette(sourceImage, 5, quality);
        var dominantColor = palette[0];
        return dominantColor;
    };
    ColorThiefProvider.prototype.getColorFromUrl = function (imageUrl, quality) {
        var _this = this;
        if (quality === void 0) { quality = 10; }
        return new Promise(function (resolve, reject) {
            var sourceImage = new Image();
            sourceImage.crossOrigin = "Anonymous";
            var dominantColor, palette;
            sourceImage.addEventListener('load', function () {
                palette = _this.getPalette(sourceImage, 5, quality);
                dominantColor = palette[0];
                resolve({ dominantColor: dominantColor, imageUrl: imageUrl });
            });
            sourceImage.src = imageUrl;
            sourceImage.addEventListener('error', reject.bind(_this));
        });
    };
    ;
    ColorThiefProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ColorThiefProvider);
    return ColorThiefProvider;
}());

var pv = {
    map: function (array, f) {
        var o = {};
        return f
            ? array.map(function (d, i) {
                o['index'] = i;
                return f.call(o, d);
            })
            : array.slice();
    },
    naturalOrder: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    },
    sum: function (array, f) {
        var o = {};
        return array.reduce(f
            ? function (p, d, i) {
                o['index'] = i;
                return p + f.call(o, d);
            }
            : function (p, d) { return p + d; }, 0);
    },
    max: function (array, f) {
        return Math.max.apply(null, f ? pv.map(array, f) : array);
    }
};
var MMCQ = (function () {
    // private constants
    var sigbits = 5;
    var rshift = 8 - sigbits;
    var maxIterations = 1000;
    var fractByPopulations = 0.75;
    // get reduced-space color index for a pixel
    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }
    // Simple priority queue
    var PQueue = /** @class */ (function () {
        function PQueue(comparator) {
            this.comparator = comparator;
            this.contents = [];
            this.sorted = false;
        }
        PQueue.prototype.sort = function () {
            this.contents.sort(this.comparator);
            this.sorted = true;
        };
        PQueue.prototype.push = function (o) {
            this.contents.push(o);
            this.sorted = false;
        };
        PQueue.prototype.peek = function (index) {
            if (!this.sorted)
                this.sort();
            if (index === undefined)
                index = this.contents.length - 1;
            return this.contents[index];
        };
        PQueue.prototype.pop = function () {
            if (!this.sorted)
                this.sort();
            return this.contents.pop();
        };
        PQueue.prototype.size = function () {
            return this.contents.length;
        };
        PQueue.prototype.map = function (f) {
            return this.contents.map(f);
        };
        PQueue.prototype.debug = function () {
            if (!this.sorted)
                this.sort();
            return this.contents;
        };
        return PQueue;
    }());
    // 3d color space box
    var VBox = /** @class */ (function () {
        function VBox(r1, r2, g1, g2, b1, b2, histo) {
            this.r1 = r1;
            this.r2 = r2;
            this.g1 = g1;
            this.g2 = g2;
            this.b1 = b1;
            this.b2 = b2;
            this.histo = histo;
        }
        VBox.prototype.volume = function (force) {
            if (!this._volume || force) {
                this._volume =
                    (this.r2 - this.r1 + 1) *
                        (this.g2 - this.g1 + 1) *
                        (this.b2 - this.b1 + 1);
            }
            return this._volume;
        };
        VBox.prototype.count = function (force) {
            if (!this._count_set || force) {
                var npix = 0;
                var i = void 0;
                var j = void 0;
                var k = void 0;
                for (i = this.r1; i <= this.r2; i++) {
                    for (j = this.g1; j <= this.g2; j++) {
                        for (k = this.b1; k <= this.b2; k++) {
                            var index = getColorIndex(i, j, k);
                            npix += this.histo[index] || 0;
                        }
                    }
                }
                this._count = npix;
                this._count_set = true;
            }
            return this._count;
        };
        VBox.prototype.copy = function () {
            return new VBox(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
        };
        VBox.prototype.avg = function (force) {
            if (!this._avg || force) {
                var ntot = 0;
                var mult = 1 << (8 - sigbits);
                var rsum = 0;
                var gsum = 0;
                var bsum = 0;
                var hval = void 0;
                var i = void 0;
                var j = void 0;
                var k = void 0;
                var histoindex = void 0;
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
                }
                else {
                    console.log('empty box');
                    this._avg = [
                        ~~(mult * (this.r1 + this.r2 + 1) / 2),
                        ~~(mult * (this.g1 + this.g2 + 1) / 2),
                        ~~(mult * (this.b1 + this.b2 + 1) / 2)
                    ];
                }
            }
            return this._avg;
        };
        VBox.prototype.contains = function (pixel) {
            var rval = pixel[0] >> rshift;
            var gval = pixel[1] >> rshift;
            var bval = pixel[2] >> rshift;
            return (rval >= this.r1 &&
                rval <= this.r2 &&
                gval >= this.g1 &&
                rval <= this.g2 &&
                bval >= this.b1 &&
                rval <= this.b2);
        };
        return VBox;
    }());
    // Color map
    var CMap = /** @class */ (function () {
        function CMap() {
            this.vboxes = new PQueue(function (a, b) {
                return pv.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume());
            });
        }
        CMap.prototype.push = function (vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        };
        CMap.prototype.palette = function () {
            return this.vboxes.map(function (vb) { return vb.color; });
        };
        CMap.prototype.size = function () {
            return this.vboxes.size();
        };
        CMap.prototype.map = function (color) {
            var vboxes = this.vboxes;
            for (var i = 0; i < vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        };
        CMap.prototype.nearest = function (color) {
            var vboxes = this.vboxes;
            var d1;
            var d2;
            var pColor;
            for (var i = 0; i < vboxes.size(); i++) {
                d2 = Math.sqrt(Math.pow((color[0] - vboxes.peek(i).color[0]), 2) +
                    Math.pow((color[1] - vboxes.peek(i).color[1]), 2) +
                    Math.pow((color[1] - vboxes.peek(i).color[1]), 2));
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        };
        CMap.prototype.forcebw = function () {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function (a, b) { return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color)); });
            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0, 0, 0];
            // force lightest color to white if everything > 251
            var idx = vboxes.length - 1;
            var highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255, 255, 255];
        };
        return CMap;
    }());
    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error
    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits);
        var histo = new Array(histosize);
        var index;
        var rval;
        var gval;
        var bval;
        pixels.forEach(function (pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }
    function vboxFromPixels(pixels, histo) {
        var rmin = 1000000;
        var rmax = 0;
        var gmin = 1000000;
        var gmax = 0;
        var bmin = 1000000;
        var bmax = 0;
        var rval;
        var gval;
        var bval;
        // find min/max
        pixels.forEach(function (pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin)
                rmin = rval;
            else if (rval > rmax)
                rmax = rval;
            if (gval < gmin)
                gmin = gval;
            else if (gval > gmax)
                gmax = gval;
            if (bval < bmin)
                bmin = bval;
            else if (bval > bmax)
                bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }
    function medianCutApply(histo, vbox) {
        if (!vbox.count())
            return;
        var rw = vbox.r2 - vbox.r1 + 1;
        var gw = vbox.g2 - vbox.g1 + 1;
        var bw = vbox.b2 - vbox.b1 + 1;
        var maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()];
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0;
        var partialsum = [];
        var lookaheadsum = [];
        var i;
        var j;
        var k;
        var sum;
        var index;
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
        }
        else if (maxw == gw) {
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
        }
        else {
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
        partialsum.forEach(function (d, i) {
            lookaheadsum[i] = total - d;
        });
        function doCut(color) {
            var dim1 = color + "1";
            var dim2 = color + "2";
            var left;
            var right;
            var vbox1;
            var vbox2;
            var d2;
            var count2 = 0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
                    else
                        d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2])
                        d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2 - 1])
                        count2 = lookaheadsum[--d2];
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
        var histo = getHisto(pixels);
        // const histosize = 1 << (3 * sigbits);
        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function () {
            nColors++;
        });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }
        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo);
        var pq = new PQueue(function (a, b) { return pv.naturalOrder(a.count(), b.count()); });
        pq.push(vbox);
        // inner function to do the iteration
        function iter(lh, target) {
            var ncolors = 1;
            var niters = 0;
            var vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count()) {
                    /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox);
                var vbox1 = vboxes[0];
                var vbox2 = vboxes[1];
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
                if (ncolors >= target)
                    return;
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
        var pq2 = new PQueue(function (a, b) {
            return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume());
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }
        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());
        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }
        return cmap;
    }
    return {
        quantize: quantize
    };
})();
var CanvasImage = /** @class */ (function () {
    function CanvasImage(image) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.width = this.canvas.width = image.width;
        this.height = this.canvas.height = image.height;
        this.context.drawImage(image, 0, 0, this.width, this.height);
    }
    CanvasImage.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };
    CanvasImage.prototype.update = function (imageData) {
        this.context.putImageData(imageData, 0, 0);
    };
    CanvasImage.prototype.getPixelCount = function () {
        return this.width * this.height;
    };
    CanvasImage.prototype.getImageData = function () {
        return this.context.getImageData(0, 0, this.width, this.height);
    };
    CanvasImage.prototype.removeCanvas = function () {
        this.canvas.parentNode.removeChild(this.canvas);
    };
    return CanvasImage;
}());
//# sourceMappingURL=color-thief.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_music_controls__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_color_thief_color_thief__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/menu-list/menu-list.module#MenuListPageModule', name: 'MenuListPage', segment: 'menu-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track-detail/track-detail.module#TrackDetailPageModule', name: 'TrackDetailPage', segment: 'detail/:id', priority: 'low', defaultHistory: ['SearchPage'] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__startTrack'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_music_controls__["a" /* MusicControls */],
                __WEBPACK_IMPORTED_MODULE_9__providers_color_thief_color_thief__["a" /* ColorThiefProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(plt, keyboard, statusbar) {
        var _this = this;
        this.plt = plt;
        this.keyboard = keyboard;
        this.statusbar = statusbar;
        this.plt.ready().then(function () {
            _this.keyboard.disableScroll(true);
            _this.keyboard.hideKeyboardAccessoryBar(true);
            _this.statusbar.overlaysWebView(true);
            _this.plt.is('ios')
                ? _this.statusbar.styleDefault()
                : _this.statusbar.styleLightContent();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: "<ion-nav root=\"MenuPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map