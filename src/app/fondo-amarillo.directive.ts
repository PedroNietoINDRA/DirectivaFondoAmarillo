import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFondoAmarillo]'
})
export class FondoAmarilloDirective {
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseover', ['$event']) 
  onMouseOver() {
    this.pintar('yellow');
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave() {
    this.pintar('');
  }

  private pintar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
