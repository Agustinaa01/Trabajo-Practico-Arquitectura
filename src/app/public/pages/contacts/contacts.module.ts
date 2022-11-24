import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactCardComponent } from "../../components/contact-card.component";
import { PopUpComponent } from "../addcontact/pop-up.component";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }