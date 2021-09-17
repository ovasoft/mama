import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminExchangeDisplayComponent } from './remit-admin-exchange-display.component';

describe('RemitAdminExchangeDisplayComponent', () => {
  let component: RemitAdminExchangeDisplayComponent;
  let fixture: ComponentFixture<RemitAdminExchangeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminExchangeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminExchangeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
