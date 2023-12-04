import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería ir a la página Home tras pulsar register', () =>{
    spyOn(router, 'navigate');
    component.register();
        
    expect(router.navigate).toHaveBeenCalledOnceWith(['/home'])
  });


});
