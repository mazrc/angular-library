import { NgModule } from '@angular/core';
import { ObjexLibComponent } from './objex-lib.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ObjexLibComponent, LoginComponent],
  imports: [
  ],
  exports: [ObjexLibComponent, LoginComponent]
})
export class ObjexLibModule { }
