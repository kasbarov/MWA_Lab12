import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<app-ullist [ListItems]="['Khalid', 'Mohamed', 'Ali']"></app-ullist>
   
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 
  
  constructor() {
   
  }

}
