import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminSupportDisplayComponent } from './remit-admin-support-display.component';

describe('RemitAdminSupportDisplayComponent', () => {
  let component: RemitAdminSupportDisplayComponent;
  let fixture: ComponentFixture<RemitAdminSupportDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminSupportDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminSupportDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
