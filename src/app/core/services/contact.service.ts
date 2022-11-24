import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { Contact } from '../interfaces/contacts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  
constructor(private auth:AuthService) {}

  async getContactDetails(id: number): Promise<Contact> {
    const jsonData = await this.getContacts();
    const contact = jsonData.filter((contact) => contact.id == id);
    return contact.length > 0 ? contact[0] : {};
  }

  async getContacts(): Promise<Contact[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
  }

  async editContact(contact: Contact) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Contact', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async addContact(contact: Contact){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async deleteContact(id:number):Promise<boolean>{
    const res = await fetch(BACKEND_URL+'/api/Contact'+id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authentication' : this.auth.getSession().token!
      },
    });
    return res.ok;
  }
}
