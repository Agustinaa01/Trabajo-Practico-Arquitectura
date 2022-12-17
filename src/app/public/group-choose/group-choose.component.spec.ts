import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChooseComponent } from './group-choose.component';

describe('GroupChooseComponent', () => {
  let component: GroupChooseComponent;
  let fixture: ComponentFixture<GroupChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
