import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss']
})
export class EditcontactComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private cs:ContactService, private router:Router) { }

  contactEdit:ContactJsonPlaceHolder={
    Name: '',
    Alias: '',
    LastName: '',
    CelularNumber: '',
    Email: '',
    TelephoneNumber: '',
    id: 0
  }

  async getContacto(id:number){  //recibe el id de un contacto
    const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
    return await contacto
  }
  async contactForEdit(id: number){
    const contactForEdit = this.getContacto(id)  //ejecuta getContacto() con el id del contacto que va a ser editado

    this.contactEdit.id = (await contactForEdit).id;           //reemplaza todos los valores del contactForeditData con los del contacto buscado
    this.contactEdit.Name = (await contactForEdit).Name,   //para que cuando se abra el form aparezcan todos los datos actuales del contacto
    this.contactEdit.LastName = (await contactForEdit).LastName,
    this.contactEdit.Alias = (await contactForEdit).Alias,
    this.contactEdit.Email = (await contactForEdit).Email,
    this.contactEdit.CelularNumber = (await contactForEdit).CelularNumber,
    this.contactEdit.TelephoneNumber = (await contactForEdit).TelephoneNumber
  }

  async editcontact(id:number, form:NgForm){
    console.log(form.value);
    const contacteditado = await this.cs.editContact(form.value); 
    if (contacteditado) this.router.navigate(['/contacts']);
  }

}
