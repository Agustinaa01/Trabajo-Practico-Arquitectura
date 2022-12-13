import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iGroup, iGroupandContact } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.scss']
})
export class ChooseGroupComponent implements OnInit {
  

  
  constructor(private cs:GroupService, private router:Router) { }

  groupData:iGroupandContact = {
    GroupId: 0,
    ContactId: 0
  };

  // async group(form:NgForm){ 
  // console.log(form.value);
  // const grupocreado = await this.cs.createGroup(form.value);
  // if (grupocreado) this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  // } // contactosFalsos = contactos
  
  
  grupo:iGroupandContact[] = [];
  
  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const grupo = {
      GroupId: 1,
      GroupName: "Familia",
      ContactId: 2,
      Name: "Ana"
    };

    try{
      this.grupo = await this.cs.getGroupstoAdd();
    }
    catch(err) {
      this.grupo = [grupo];
    }
    console.log(this.grupo)
  };
}
