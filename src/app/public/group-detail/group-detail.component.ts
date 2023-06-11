import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iGroup } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  constructor(private cs: GroupService, private router:Router,private route: ActivatedRoute) { }
  
  group: iGroup = {
    id: 0,
    groupName: '',
    description: '',
    contacts: []
  }
  
  id: number | undefined
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.getGroupDetails(this.id!);
    })
  }
  
  getGroupDetails(id: number) {
    this.cs.getGroupDetails(id).then(r => this.group = r);
  }
  
  async deleteGroup(id:number){ 
    console.log("Contacto", id, "eliminado");
    const grupoeliminado = await this.cs.deleteGroup(id);
    if (grupoeliminado) this.router.navigate(['/grupo']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    }

  getinitials(): string {
    return this.group.groupName
    .slice(0, 1)
    .concat(
      this.group.groupName.slice(
        this.group.groupName.length
        )
    );
  }
}


