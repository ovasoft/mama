import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminUsersComponent } from './remit-admin-users.component';

describe('RemitAdminUsersComponent', () => {
  let component: RemitAdminUsersComponent;
  let fixture: ComponentFixture<RemitAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
