import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitLoginFormComponent } from './remit-login-form.component';

describe('RemitLoginFormComponent', () => {
  let component: RemitLoginFormComponent;
  let fixture: ComponentFixture<RemitLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
