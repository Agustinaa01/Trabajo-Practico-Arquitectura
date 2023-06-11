import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseGroupRoutingModule } from './choose-group-routing.module';
import { GroupChooseComponent } from '../../group-choose/group-choose.component';
import { ChooseGroupComponent } from './choose-group.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChooseGroupComponent,
    GroupChooseComponent,
  ],
  exports:[
    ChooseGroupComponent,
  ],
  imports: [
    CommonModule,
    ChooseGroupRoutingModule,
    FormsModule
  ]
})
export class ChooseGroupModule { }
