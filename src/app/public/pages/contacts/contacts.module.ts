import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactCardComponent } from "../../components/contact-card.component";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";



@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
