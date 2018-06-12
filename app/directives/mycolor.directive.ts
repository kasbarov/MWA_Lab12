import { Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
 
  @Output() colorChanged: EventEmitter<string>;
  element: ElementRef;
  i: number;

  colors: string[];

  constructor(element: ElementRef) {
    this.element = element;
    this.colors = ['red', 'green', 'blue', 'yellow'];
    this.i = 0;
    this.colorChanged = new EventEmitter();
  }


  @HostListener('click') changeColor() {
    //console.log('clicked');
    let randomeColor: string = this.colors[this.i++ % 4]
    this.element.nativeElement.style.color = randomeColor;
    this.colorChanged.emit(randomeColor);

  }
}
