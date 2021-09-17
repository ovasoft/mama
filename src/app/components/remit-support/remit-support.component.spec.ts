import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitSupportComponent } from './remit-support.component';

describe('RemitSupportComponent', () => {
  let component: RemitSupportComponent;
  let fixture: ComponentFixture<RemitSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
