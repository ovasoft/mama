import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminCoinsDisplayComponent } from './remit-admin-coins-display.component';

describe('RemitAdminCoinsDisplayComponent', () => {
  let component: RemitAdminCoinsDisplayComponent;
  let fixture: ComponentFixture<RemitAdminCoinsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminCoinsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminCoinsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
