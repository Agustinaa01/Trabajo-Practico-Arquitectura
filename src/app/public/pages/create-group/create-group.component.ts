import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iCreateGroup, iGroup, iGroupandContact } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  constructor(private us:GroupService, private router:Router) { }
  
  groupData:iCreateGroup = {
    groupName: '',
    description: ''
  };


  async newgroup(form:NgForm){ 
  console.log(form.value);
  const grupocreado = await this.us.createGroup(form.value);
  if (grupocreado) this.router.navigate(['/grupo']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }

  grupos:iGroupandContact[] = [];
  
  ngOnInit(): void {

  }

}