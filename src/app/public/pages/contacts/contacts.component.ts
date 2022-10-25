import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';
import { contactosFalsos } from 'src/assets/FakeContacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private cs:ContactService) { }

  listaContactos:Contact[] = contactosFalsos;

  async ngOnInit() {
      this.listaContactos = await this.buscarContactos();
      console.log(this.listaContactos)
  }

  async buscarContactos(){
    return await this.cs.getContacts();
  }

}
