import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  constructor(private cs:ContactService) { }

  //@Input() contact: Contact = defaultContact
 @Input() contacto: ContactJsonPlaceHolder = {} as ContactJsonPlaceHolder;

 contactsData:ContactJsonPlaceHolder[] = [];

 ngOnInit(): void {
  this.getData()
}

async getData(){
  this.contactsData = await this.cs.getContacts();
}
}