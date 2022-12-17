import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iGroup } from 'src/app/core/interfaces/group.interface';

import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss']
})
export class ChooseGroupComponent implements OnInit {
    
  constructor(private cs:GroupService, private router:Router,private route: ActivatedRoute) { }

  groupData:iGroup = {
    id: 0,
    groupName: '',
    description: '',
    contacts: []
  };

  grupos: iGroup[] = [];
  

  ngOnInit(): void {
    this.getData();
  }
  
  async getData() {
    this.grupos = await this.cs.getGroupsNames();
    console.log(this.grupos);
    
  }
  
  async addToGroup(form:NgForm){ 
    console.log(form.value);
    const contactcreado = await this.cs.addtogroup(form.value);
    if (contactcreado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    }
  }
