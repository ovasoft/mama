import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitFooterComponent } from './remit-footer.component';

describe('RemitFooterComponent', () => {
  let component: RemitFooterComponent;
  let fixture: ComponentFixture<RemitFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
