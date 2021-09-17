import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitHeaderComponent } from './remit-header.component';

describe('RemitHeaderComponent', () => {
  let component: RemitHeaderComponent;
  let fixture: ComponentFixture<RemitHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
