import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BodyComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
