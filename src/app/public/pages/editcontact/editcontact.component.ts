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
  await this.cs.editContact(editForm.value)
  this.router.navigate(["/contacts"]);
}

}