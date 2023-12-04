import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should go to home page afeter on login', () =>{
    spyOn(router, 'navigate');
    component.login();
        
    expect(router.navigate).toHaveBeenCalledOnceWith(['/home'])
  });

  it('Should create form on Init', () =>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })

  


});
