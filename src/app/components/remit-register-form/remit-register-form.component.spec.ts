import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitRegisterFormComponent } from './remit-register-form.component';

describe('RemitRegisterFormComponent', () => {
  let component: RemitRegisterFormComponent;
  let fixture: ComponentFixture<RemitRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
