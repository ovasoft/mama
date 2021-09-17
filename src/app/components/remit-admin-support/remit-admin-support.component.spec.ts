import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminSupportComponent } from './remit-admin-support.component';

describe('RemitAdminSupportComponent', () => {
  let component: RemitAdminSupportComponent;
  let fixture: ComponentFixture<RemitAdminSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
