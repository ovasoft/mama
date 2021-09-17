import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitMarketTrendComponent } from './remit-market-trend.component';

describe('RemitMarketTrendComponent', () => {
  let component: RemitMarketTrendComponent;
  let fixture: ComponentFixture<RemitMarketTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitMarketTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitMarketTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
