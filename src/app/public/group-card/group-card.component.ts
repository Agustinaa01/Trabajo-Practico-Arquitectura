import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iGroup } from 'src/app/core/interfaces/group.interface';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  constructor(private cs: GroupService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.groups)
  }
  @Input() groups:iGroup = {} as iGroup;

  async deleteGroup(id:number){ 
    console.log("Contacto", id, "eliminado");
    const grupoeliminado = await this.cs.deleteGroup(id);
    if (grupoeliminado) this.router.navigate(['/grupo']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    }
    
}
