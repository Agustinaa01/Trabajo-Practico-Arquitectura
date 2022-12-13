import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopUpRoutingModule } from './pop-up-routing.module';
import { PopUpComponent } from './pop-up.component';
import { FormsModule } from '@angular/forms';
//import { PopUpComponent } from './pop-up.component';


@NgModule({
  declarations: [
    PopUpComponent,
  ],
  imports: [
    CommonModule,
    PopUpRoutingModule,
    FormsModule
  ]
})
export class PopUpModule { }
