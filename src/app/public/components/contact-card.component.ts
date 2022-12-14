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
  name: '',
  alias: '',
  lastName:'',
  celularNumber: '',
  telephoneNumber: '',
  email: '',
 };
 async deleteContact(id:number){ 
  console.log("Contacto", id, "eliminado");
  const contacteliminado = await this.cs.deleteContact(id);
  if (contacteliminado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }

  // async editContacto(){  //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
  //   console.log("contacto editado")
  //   const contacteditado = await this.cs.editContact();
  //   if (contacteditado) this.router.navigate(['/contacts']);  //cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contact-card y se abra el edit-form
  // }

//  contactsData:ContactJsonPlaceHolder[] = [];

 ngOnInit(): void {

}

// async getData(){
//   this.contactsData = await this.cs.getContacts();
// }
}