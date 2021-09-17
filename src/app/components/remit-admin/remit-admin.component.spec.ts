import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminComponent } from './remit-admin.component';

describe('RemitAdminComponent', () => {
  let component: RemitAdminComponent;
  let fixture: ComponentFixture<RemitAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
