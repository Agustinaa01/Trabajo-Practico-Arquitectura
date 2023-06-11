import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcontactRoutingModule } from './editcontact-routing.module';
import { FormsModule } from '@angular/forms';
import { EditcontactComponent } from './editcontact.component';


@NgModule({
  declarations: [
    EditcontactComponent
  ],
  imports: [
    CommonModule,
    EditcontactRoutingModule,
    FormsModule
  ]
})
export class EditcontactModule { }
