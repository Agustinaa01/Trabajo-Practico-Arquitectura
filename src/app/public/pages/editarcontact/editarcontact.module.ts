import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarcontactRoutingModule } from './editarcontact-routing.module';
import { EditarcontactComponent } from './editarcontact.component';


@NgModule({
  declarations: [
    EditarcontactComponent
  ],
  imports: [
    CommonModule,
    EditarcontactRoutingModule
  ]
})
export class EditarcontactModule { }
