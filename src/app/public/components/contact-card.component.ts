import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contacts';
import { ContactsComponent } from '../pages/contacts/contacts.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  constructor(private cc:ContactsComponent) { }

  @Input() contacto:Contact = {
    id: 0,
    Name: '',
    Alias: '',
    LastName: '',
    CelularNumber: '',
    Email: ''
  };


  ngOnInit(): void {
  }
}