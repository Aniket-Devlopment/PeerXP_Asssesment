import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeptComponent } from './updatedept.component';

describe('UpdatedeptComponent', () => {
  let component: UpdatedeptComponent;
  let fixture: ComponentFixture<UpdatedeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
