import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';
import { ContactsComponent } from '../pages/contacts/contacts.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  constructor(private cs: ContactService, private router:Router) { }

  //@Input() contact: Contact = defaultContact
 @Input() contacto: ContactJsonPlaceHolder = {
  id:0,
  Name: '',
  Alias: '',
  LastName:'',
  CelularNumber: '',
  TelephoneNumber: '',
  Email: '',
 };
 async deleteContact(id:number){ 
  console.log("Contacto", id, "eliminado");
  const contacteliminado = await this.cs.deleteContact(id);
  if (contacteliminado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }

//  contactsData:ContactJsonPlaceHolder[] = [];

 ngOnInit(): void {
  // this.getData()
}

// async getData(){
//   this.contactsData = await this.cs.getContacts();
// }
}