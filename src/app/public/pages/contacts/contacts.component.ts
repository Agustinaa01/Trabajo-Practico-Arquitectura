import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceHolder} from 'src/app/core/interfaces/contacts';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor(private us: ContactService, private auth:AuthService) { }
  
  contactos: ContactJsonPlaceHolder[] = [];

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.contactos = await this.us.getContacts();
    console.log(this.contactos);
  }
  logOut(){
    this.auth.resetSession();

  }

}

