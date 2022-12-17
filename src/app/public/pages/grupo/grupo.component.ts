import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { iGroup } from 'src/app/core/interfaces/group.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.services';
import { ContactCardComponent } from '../../components/contact-card.component';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {

  constructor(private us: GroupService, private auth:AuthService) { }

  grupos: iGroup[] = [];
 
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.grupos= await this.us.getGroups();
    console.log(this.grupos);
  }
  
  logOut(){
    this.auth.resetSession();

  }
}