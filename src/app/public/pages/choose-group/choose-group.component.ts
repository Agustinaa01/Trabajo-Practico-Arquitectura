import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iChooseGroup, iGroup, iGroupandContact } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss']
})
export class ChooseGroupComponent implements OnInit {
    
  constructor(private cs:GroupService, private router:Router,private route: ActivatedRoute) { }

  groupData:iChooseGroup = {
    id: 0,
    groupName: '',
    description: ''
  };

  grupos: iChooseGroup[] = [];
  id: number | undefined

  ngOnInit(): void {
    this.getData();
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.cs.getGroupDetails(this.id!).then(r => this.groupData= r);
    })
  }

  async getData() {
    this.grupos = await this.cs.getGroups();
    console.log(this.grupos);
  }
  contact: iGroupandContact = {
    groupId: 0,
    contactId: 0
  }
  
  isSubmitted = false;
  
  async submitForm(form : NgForm): Promise<void> {
    if (form.errors !== null) return
    const res  = await this.cs.addtogroup(form.value)
    this.router.navigate(["/contacts"]);
  }
}
