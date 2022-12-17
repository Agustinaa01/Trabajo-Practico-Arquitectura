import { Component, Input, OnInit } from '@angular/core';
import { iGroup } from 'src/app/core/interfaces/group.interface';

@Component({
  selector: 'app-group-choose',
  templateUrl: './group-choose.component.html',
  styleUrls: ['./group-choose.component.scss']
})
export class GroupChooseComponent implements OnInit {
  @Input() groups:iGroup = {} as iGroup;
  constructor() { }
  ngOnInit(): void {
  }

}
