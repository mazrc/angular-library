import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjexLibModule, LoginComponent } from 'objex-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ObjexLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
