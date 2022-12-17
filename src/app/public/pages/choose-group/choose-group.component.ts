import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iGroup, iGroupandContact } from 'src/app/core/interfaces/group.interface';

import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss']
})
export class ChooseGroupComponent implements OnInit {
    
  constructor(private cs:GroupService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();

  }

  grupos: iGroup[] = [];

  async getData() {
    this.grupos = await this.cs.getGroupsNames();
    console.log(this.grupos);
  }


  union: iGroupandContact = {
    groupId: 0,
    contactId: 0
  }
  id: number | undefined 

  async addToGroup(form:NgForm){ 
    console.log(form.value);
    const contactcreado = await this.cs.addtogroup(form.value);
    if (contactcreado) this.router.navigate(['/contacts']);
    }
  }
