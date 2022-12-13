import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import {ContactJsonPlaceHolder } from '../interfaces/contacts';
import { iGroup, iGroupandContact } from '../interfaces/group.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private auth:AuthService) {}

  async getGroups(): Promise<iGroup[]> {
    const data = await fetch(BACKEND_URL+'/api/Group',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }
  async getGroupstoAdd(): Promise<iGroupandContact[]> {
    const data = await fetch(BACKEND_URL+'/api/Group',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async createGroup(group: iGroup){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Group', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(group),
    });
    return await res.json();
  }
  

  async addtogroup(grupo: iGroupandContact){
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Group/AddContacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(grupo),
    });
    return await res.json();
  }




}