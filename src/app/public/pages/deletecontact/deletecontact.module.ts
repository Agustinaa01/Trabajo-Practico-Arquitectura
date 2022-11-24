import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletecontactRoutingModule } from './deletecontact-routing.module';
//import { ContactsComponent } from '../contacts/contacts.component';
import { DeletecontactComponent } from './deletecontact.component';


@NgModule({
  declarations: [
    DeletecontactComponent,
  ],
  imports: [
    CommonModule,
    DeletecontactRoutingModule
  ]
})
export class DeletecontactModule { }
