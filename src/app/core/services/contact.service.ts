import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { Contact } from '../interfaces/contacts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  
constructor() {}

  async getUserDetails(id: number) 
  {
  console.log("ok")
  }

  async getContacts(): Promise<Contact[]>  {
    const data = await fetch('https://localhost:7108/api/Contacts');
    return await data.json();
  }
  async getContact(id: number): Promise<Contact[]>  {
    const data = await fetch('https://localhost:7108/api/Contacts/'+id);
    return await data.json();
  }
  async UpdateContact(c: Contact): Promise<Contact>  {
    const res = await fetch('https://localhost:7108/api/Contacts/', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c)
    });
    return res.json();
  }

  async AddContact(c: Contact): Promise<Contact>  {
    const res = await fetch('https://localhost:7108/api/Contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c)
    });
    return res.json();
  }

  async deleteContact(id: number): Promise<boolean>  {
    const res = await fetch('https://localhost:7108/api/Contacts/'+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.ok;
  }
}
