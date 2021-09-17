import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminCurrenciesComponent } from './remit-admin-currencies.component';

describe('RemitAdminCurrenciesComponent', () => {
  let component: RemitAdminCurrenciesComponent;
  let fixture: ComponentFixture<RemitAdminCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
