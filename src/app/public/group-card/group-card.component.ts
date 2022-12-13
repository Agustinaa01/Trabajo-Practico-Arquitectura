import { Component, Input, OnInit } from '@angular/core';
import { iGroup } from 'src/app/core/interfaces/group.interface';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() groups:iGroup = {} as iGroup;
}
