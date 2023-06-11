import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { iRegisterRequest } from '../interfaces/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  async addUser(user: iRegisterRequest) { 
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await res.json();
  }
}
