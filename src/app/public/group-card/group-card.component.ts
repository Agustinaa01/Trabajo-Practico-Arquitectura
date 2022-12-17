import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';
import { iGroup } from 'src/app/core/interfaces/group.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { GroupService } from 'src/app/core/services/group.services';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  constructor(private cs: GroupService, private router:Router,private auth:AuthService) { }

  ngOnInit(): void {

  }
  @Input() groups:iGroup = {} as iGroup;

  async deleteGroup(id:number){ 
    console.log("Contacto", id, "eliminado");
    const grupoeliminado = await this.cs.deleteGroup(id);
    if (grupoeliminado) this.router.navigate(['/grupo']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    }

}
