import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceHolder} from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactos:ContactJsonPlaceHolder[] = [];
  
  constructor(private us:ContactService) { }
  // contactosFalsos = contactos

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const contactos = {
      id:1,
      Name: "Maria",
      LastName: "Juarez",
      Alias: "Mary",
      Email:"maria123@gmail.com",
      CelularNumber: "3436478954",
      TelephoneNumber: "645545"
    };

    try{
      this.contactos = await this.us.getContacts();
    }
    catch(err) {
      this.contactos = [contactos];
    }
    console.log(this.contactos)
  };
  
 
}

