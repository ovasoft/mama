import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitAdminPlatformsComponent } from './remit-admin-platforms.component';

describe('RemitAdminPlatformsComponent', () => {
  let component: RemitAdminPlatformsComponent;
  let fixture: ComponentFixture<RemitAdminPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitAdminPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitAdminPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
