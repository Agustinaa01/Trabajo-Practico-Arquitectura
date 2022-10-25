import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:ContactJsonPlaceHolder[] = [];

  constructor(private cs:ContactService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.contactsData = await this.cs.getContacts();
  }
}
