import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import {ContactJsonPlaceHolder } from '../interfaces/contacts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private auth:AuthService) {}

  async getContactDetails(id: number): Promise<ContactJsonPlaceHolder> {
    const data = await fetch(BACKEND_URL+'/api/Contacto/'+ id,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async getContacts(): Promise<ContactJsonPlaceHolder[]> {
    const data = await fetch(BACKEND_URL+'/api/Contacts',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async editContact(contact: ContactJsonPlaceHolder) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Contacts', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async addContact(contact: ContactJsonPlaceHolder){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async deleteContact(id:number):Promise<boolean>{
    const res = await fetch(BACKEND_URL+'/api/Contacts'+id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return res.ok;
  }
}