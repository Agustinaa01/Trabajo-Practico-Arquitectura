import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGroupRoutingModule } from './create-group-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateGroupComponent } from './create-group.component';


@NgModule({
  declarations: [
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    CreateGroupRoutingModule,
    FormsModule
  ]
})
export class CreateGroupModule { }
