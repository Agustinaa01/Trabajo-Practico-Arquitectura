import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iGroup, iGroupandContact } from 'src/app/core/interfaces/group.interface';
import { ContactService } from 'src/app/core/services/contact.service';

import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss']
})
export class ChooseGroupComponent implements OnInit {
    
  constructor(private cs:GroupService,private us:ContactService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.route.params.subscribe(params => {
      console.log(params)
      this.union.contactId = parseInt(params['id']);
    })
    
  }

  grupos: iGroup[] = [];

  async getData() {
    this.grupos = await this.cs.getGroupsNames();
 }

  union: iGroupandContact = {
    groupId: 0,
    contactId: 0
  }

  id: number | undefined

  async addToGroup(form:NgForm){
    console.log(form.value) 
    console.log(this.union);
    const contactcreado = await this.cs.addtogroup(this.union);
    if (contactcreado) this.router.navigate(['/contacts']);
    }
  }
