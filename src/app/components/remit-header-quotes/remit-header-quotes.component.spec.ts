import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitHeaderQuotesComponent } from './remit-header-quotes.component';

describe('RemitHeaderQuotesComponent', () => {
  let component: RemitHeaderQuotesComponent;
  let fixture: ComponentFixture<RemitHeaderQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitHeaderQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitHeaderQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
