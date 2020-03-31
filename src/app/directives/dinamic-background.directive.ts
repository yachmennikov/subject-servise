import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDinamicBackground]'
})
export class DinamicBackgroundDirective {

  @Input() сolor: string;

  constructor(private element: ElementRef) { }

  changeBackground(color: string) {
    this.element.nativeElement.style.backgroundColor = this.сolor;
  }
}
