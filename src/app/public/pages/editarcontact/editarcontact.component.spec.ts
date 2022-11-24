import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontactComponent } from './editarcontact.component';

describe('EditarcontactComponent', () => {
  let component: EditarcontactComponent;
  let fixture: ComponentFixture<EditarcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
