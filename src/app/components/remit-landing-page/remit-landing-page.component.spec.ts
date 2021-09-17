import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitLandingPageComponent } from './remit-landing-page.component';

describe('RemitLandingPageComponent', () => {
  let component: RemitLandingPageComponent;
  let fixture: ComponentFixture<RemitLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
