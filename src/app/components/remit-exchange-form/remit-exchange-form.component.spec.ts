import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitExchangeFormComponent } from './remit-exchange-form.component';

describe('RemitExchangeFormComponent', () => {
  let component: RemitExchangeFormComponent;
  let fixture: ComponentFixture<RemitExchangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitExchangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
