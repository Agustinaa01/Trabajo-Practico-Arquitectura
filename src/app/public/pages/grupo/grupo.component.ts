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

  constructor(private us: GroupService) { }
  grupos: iGroup[] = [];

  ngOnInit(): void {
    this.getData();
    console.log(this.grupos)
  }

  async getData() {
    this.grupos= await this.us.getGroups();
    console.log(this.grupos);
  }
}