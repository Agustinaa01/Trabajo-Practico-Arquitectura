import { Component, Input, OnInit } from '@angular/core';
import { iChooseGroup } from 'src/app/core/interfaces/group.interface';

@Component({
  selector: 'app-group-choose',
  templateUrl: './group-choose.component.html',
  styleUrls: ['./group-choose.component.scss']
})
export class GroupChooseComponent implements OnInit {
  
  @Input() groups:iChooseGroup = {} as iChooseGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
