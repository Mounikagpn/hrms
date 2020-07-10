import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePriviligesComponent } from './role-priviliges.component';

describe('RolePriviligesComponent', () => {
  let component: RolePriviligesComponent;
  let fixture: ComponentFixture<RolePriviligesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePriviligesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePriviligesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
