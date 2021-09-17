import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminHeaderComponent } from './remit-admin-header.component';

describe('RemitAdminHeaderComponent', () => {
  let component: RemitAdminHeaderComponent;
  let fixture: ComponentFixture<RemitAdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
