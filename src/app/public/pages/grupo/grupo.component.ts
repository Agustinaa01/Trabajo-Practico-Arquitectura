import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iGroup } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {
  

  
  constructor(private cs:GroupService, private router:Router) { }

  groupData:iGroup = {
    Id: 0,
    GroupName: '',
    Description: '',
    Contacts: []
  };

  // async group(form:NgForm){ 
  // console.log(form.value);
  // const grupocreado = await this.cs.createGroup(form.value);
  // if (grupocreado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  // } // contactosFalsos = contactos
  
  
  grupo:iGroup[] = [];
  
  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const grupo = {
      Id: 1,
      GroupName: "Familia",
      Description:"La Family",
      Contacts: []
    };

    try{
      this.grupo = await this.cs.getGroups();
    }
    catch(err) {
      this.grupo = [grupo];
    }
    console.log(this.grupo)
  };
}