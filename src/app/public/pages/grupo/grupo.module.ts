import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { FormsModule } from '@angular/forms';
import { GrupoComponent } from './grupo.component';
import { GroupCardComponent } from '../../group-card/group-card.component';
import { CardDetailComponent } from '../../card-detail/card-detail.component';


@NgModule({
  declarations: [
    GrupoComponent,
    GroupCardComponent,
  ],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    FormsModule
  ]
})
export class GrupoModule { }
