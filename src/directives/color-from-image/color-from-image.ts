import { Directive, Input, ElementRef } from '@angular/core';
import { ColorThiefProvider } from '../../providers/color-thief/color-thief';
@Directive({
  selector: '[colorFromImage]' // Attribute selector
})
export class ColorFromImageDirective {
  @Input() colorFromImage;
  constructor(public colorThief: ColorThiefProvider, public el: ElementRef) {}
  ngAfterViewInit() {
    this.colorThief
      .getColorFromUrl(this.colorFromImage.src)
      .then((res: { dominantColor: number[]; imageUrl: string }) => {
        let colorMap = res.dominantColor;
        this.el.nativeElement.style.opacity = 1;
        this.el.nativeElement.style.backgroundColor = `rgb(${colorMap[0]},${colorMap[1]},${colorMap[2]})`;
      });
  }
}
