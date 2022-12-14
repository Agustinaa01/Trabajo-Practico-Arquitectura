import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactJsonPlaceHolder } from "src/app/core/interfaces/contacts";
import { ContactService } from "src/app/core/services/contact.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  
  constructor(private cs:ContactService, private router:Router) { }

  contactData:ContactJsonPlaceHolder = {
    name: '',
    alias: '',
    lastName: '',
    celularNumber: '',
    email: '',
    telephoneNumber: "",
    id: 0
  };
  ngOnInit(): void {
  }
  async newcontact(form:NgForm){ 
  console.log(form.value);
  const contactcreado = await this.cs.addContact(form.value);
  if (contactcreado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }
  
}
