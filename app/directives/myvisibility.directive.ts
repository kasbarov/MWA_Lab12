import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input() visibile: boolean = true;

  renderer2: Renderer2;
  element: ElementRef;

  constructor(element: ElementRef, renderer2: Renderer2) {

    this.element = element;
    this.renderer2 = renderer2;

  }

  ngOnInit() {
  //  console.log(this.visibile);
    // show hide the element
    if (this.visibile)
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'block');
    else
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
  }
}
