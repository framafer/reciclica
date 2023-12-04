import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ir a la página pickup-call tras pulsar SEE ALL', () =>{
    spyOn(router, 'navigate');
    component.goToPickupCall();
        
    expect(router.navigate).toHaveBeenCalledOnceWith(['/pickup-call'])
  });

  it('Debería ir a la página pickup-call-forgotten tras pulsar el botón + , una nueva llamada', () =>{
    spyOn(router, 'navigate');
    component.newPickupCall();
        
    expect(router.navigate).toHaveBeenCalledOnceWith(['/pickup-call-forgotten'])
  });
});
