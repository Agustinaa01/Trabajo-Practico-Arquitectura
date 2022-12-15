import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  constructor(private cs: ContactService, private router:Router,private route: ActivatedRoute) { }


  contact: ContactJsonPlaceHolder = {
    id: 0,
    name: '',
    alias: '',
    lastName: '',
    celularNumber: '',
    telephoneNumber: '',
    email: ''
  }
  
  id: number | undefined
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.getContactDetails(this.id!);
    })
  }
  
  getContactDetails(id: number) {
    this.cs.getContactDetails(id).then(r => this.contact = r);
  }
  
  getinitials(): string {
    return this.contact.name
    .slice(0, 1)
    .concat(
        this.contact.name.slice(
            this.contact.name.length - 1,
            this.contact.name.length
        )
    );
  }
  }
  // async getData(){
  //   this.contactsData = await this.cs.getContacts();
  // }
  
