import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactCardComponent } from "../../components/contact-card.component";
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";



@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
