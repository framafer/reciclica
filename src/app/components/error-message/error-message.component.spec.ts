import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    
  }));

  it('should show error message on field touched an error present', () => {

    component.errorType = 'required';
    component.message = 'El campo es obligatorio';
    
    component.field = new FormControl('', []);
    component.field.markAsTouched();
    component.field.setErrors({required: true});
        

    expect(component.shouldShowComponent()).toBeTruthy();
  });


  it('should show error message on field touched y error tipo email present', () => {

    component.errorType = 'email';
    component.message = 'El email no es correcto';
    
    component.field = new FormControl('', []);
    component.field.markAsTouched();
    component.field.setErrors({email: true});
        

    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it('should hide error message on field touched but no errors are present', () => {

    component.errorType = 'anyError';
    component.message = '';
    
    component.field = new FormControl('', []);
    component.field.markAsTouched();
    //component.field.setErrors({email: true});
        

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched and hast error, but it is diferent error', () => {

    component.errorType = 'anOtherError';
    component.message = '';
    
    component.field = new FormControl('', []);
    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
        

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  
});
