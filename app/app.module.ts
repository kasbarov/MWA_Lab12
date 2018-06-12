import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ULListComponent } from './ULListComponent/ullist.component';
import { UpperDirectiveDirective } from './directives/upper-directive.directive';
import { MyvisibilityDirective } from './directives/myvisibility.directive';
import { MycolorDirective } from './directives/mycolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    ULListComponent,
    UpperDirectiveDirective,
    MyvisibilityDirective,
    MycolorDirective
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
