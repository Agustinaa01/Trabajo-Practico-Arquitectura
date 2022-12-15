import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';
import { ContactCardComponent } from '../../components/contact-card.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss']
})
export class EditcontactComponent implements OnInit {


  constructor(private cs:ContactService, private router:Router,private route: ActivatedRoute ) { }

//   contactEdit:ContactJsonPlaceHolder={
//     name: '',
//     alias: '',
//     lastName: '',
//     celularNumber: '',
//     email: '',
//     telephoneNumber: '',
//     id: 0
//   }

//   async getContacto(id:number){  //recibe el id de un contacto
//     const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
//     return await contacto
//   }
//   async contactForEdit(id: number){
//     const contactForEdit = this.getContacto(id)  //ejecuta getContacto() con el id del contacto que va a ser editado

//     this.contactEdit.id = (await contactForEdit).id;           //reemplaza todos los valores del contactForeditData con los del contacto buscado
//     this.contactEdit.name = (await contactForEdit).name,   //para que cuando se abra el form aparezcan todos los datos actuales del contacto
//     this.contactEdit.lastName = (await contactForEdit).lastName,
//     this.contactEdit.alias = (await contactForEdit).alias,
//     this.contactEdit.email = (await contactForEdit).email,
//     this.contactEdit.celularNumber = (await contactForEdit).celularNumber,
//     this.contactEdit.telephoneNumber = (await contactForEdit).telephoneNumber
//   }

//   async editcontact(id:number,form:NgForm){
//     console.log(form.value);
//     const contacteditado = await this.cs.editContact(id,form.value); 
//     if (contacteditado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)//cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contact-card y se abra el edit-form
//   }

// }

id: number | undefined

ngOnInit(): void {
  this.route.params.subscribe(params => {
    console.log(params)
    this.id = params['id'];
    this.cs.getContactDetails(this.id!).then(r => this.contact = r);
  })
}



contact: ContactJsonPlaceHolder = {
  id: 0,
  name: '',
  alias: '',
  lastName: '',
  celularNumber: '',
  telephoneNumber: '',
  email: ''
}

isEdit: boolean = false;

async editContact(editForm : NgForm): Promise<void> {
  if (editForm.errors !== null) return
  const res  = await this.cs.editContact(editForm.value)
  this.router.navigate(["/contacts"]);
}

}