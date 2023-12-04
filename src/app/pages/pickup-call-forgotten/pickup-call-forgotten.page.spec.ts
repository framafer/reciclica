import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PickupCallForgottenPage } from './pickup-call-forgotten.page';
import { Router } from '@angular/router';

describe('PickupCallForgottenPage', () => {
  let component: PickupCallForgottenPage;
  let fixture: ComponentFixture<PickupCallForgottenPage>;
  let router: Router
  

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupCallForgottenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ir a la página home tras pulsar "CREATE PICKUP CALL', () =>{
    spyOn(router, 'navigate');
    component.newPickupCall();
        
    expect(router.navigate).toHaveBeenCalledOnceWith(['/home'])
  });

  
});
