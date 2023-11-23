import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallForgottenPage } from './pickup-call-forgotten.page';

describe('PickupCallForgottenPage', () => {
  let component: PickupCallForgottenPage;
  let fixture: ComponentFixture<PickupCallForgottenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupCallForgottenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
