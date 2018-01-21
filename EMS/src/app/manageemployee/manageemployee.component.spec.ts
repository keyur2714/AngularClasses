import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageemployeeComponent } from './manageemployee.component';

describe('ManageemployeeComponent', () => {
  let component: ManageemployeeComponent;
  let fixture: ComponentFixture<ManageemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
