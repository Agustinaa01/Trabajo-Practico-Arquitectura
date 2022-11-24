import { Component, OnInit } from '@angular/core';
import { Contact, contactos } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactos:Contact[] = contactos;
  
  constructor(private us:ContactService) { }
  contactosFalsos = contactos

  ngOnInit(): void {
  //   this.getData()
  // }

  // async getData(){
  //   this.contactos = await this.cs.getContacts();
  // }
  
  }
}
