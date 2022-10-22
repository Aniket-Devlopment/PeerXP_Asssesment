import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDeptComponent } from './assign-dept.component';

describe('AssignDeptComponent', () => {
  let component: AssignDeptComponent;
  let fixture: ComponentFixture<AssignDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
