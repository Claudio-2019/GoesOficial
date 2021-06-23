import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosVerdesComponent } from './sellos-verdes.component';

describe('SellosVerdesComponent', () => {
  let component: SellosVerdesComponent;
  let fixture: ComponentFixture<SellosVerdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellosVerdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellosVerdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
