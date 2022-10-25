import { Injectable } from '@angular/core';
import { ContactJsonPlaceHolder } from '../interfaces/contacts';

import { BACKEND_URL } from '../constants/backend';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  async getContacts(): Promise<ContactJsonPlaceHolder[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
  }
}
