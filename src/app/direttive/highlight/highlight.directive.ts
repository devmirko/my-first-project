import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter(){

      this.cambiaColore('black','white')
   }

   @HostListener('mouseleave') onMouseLeave(){

    this.cambiaColore('white','black')
  }

  cambiaColore(coloreSfondo : string, coloreCar : string) {
    this.element.nativeElement.style.backgroundColor = coloreSfondo
    this.element.nativeElement.style.color = coloreCar

  }




}
