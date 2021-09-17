import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminDashboardComponent } from './remit-admin-dashboard.component';

describe('RemitAdminDashboardComponent', () => {
  let component: RemitAdminDashboardComponent;
  let fixture: ComponentFixture<RemitAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
