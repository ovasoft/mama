import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminNavComponent } from './remit-admin-nav.component';

describe('RemitAdminNavComponent', () => {
  let component: RemitAdminNavComponent;
  let fixture: ComponentFixture<RemitAdminNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
