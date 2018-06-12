import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ullist',
  template: `
  <ul appMyvisibility [visibile]='true'>
  <li appUpperDirective appMycolor (colorChanged)="colorChanged($event)" *ngFor='let item of ListItems'> {{item}} </li>
  </ul>

  `,
  styles: []
})
export class ULListComponent implements OnInit {

  @Input() ListItems: string[]=[];

  constructor() { 

  }

  colorChanged (e){
    console.log(e);
  }
  ngOnInit() {
  }

}
