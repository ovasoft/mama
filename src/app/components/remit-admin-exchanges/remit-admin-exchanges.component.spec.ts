import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminExchangesComponent } from './remit-admin-exchanges.component';

describe('RemitAdminExchangesComponent', () => {
  let component: RemitAdminExchangesComponent;
  let fixture: ComponentFixture<RemitAdminExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminExchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
