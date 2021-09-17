import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitMarketTrendGraphComponent } from './remit-market-trend-graph.component';

describe('RemitMarketTrendGraphComponent', () => {
  let component: RemitMarketTrendGraphComponent;
  let fixture: ComponentFixture<RemitMarketTrendGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitMarketTrendGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitMarketTrendGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
