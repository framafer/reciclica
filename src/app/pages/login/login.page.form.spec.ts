import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Router } from "@angular/router";



describe('LoginPageForm', ()=> {

    let fixture: ComponentFixture<LoginPageForm>; 
    let form: FormGroup;

    beforeEach(() => {
        const loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
     })

    it('should create an instance', () => {
    
        
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual('');
        expect(form.get('email')?.valid).toBeFalse();

        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')?.value).toEqual('');
        expect(form.get('password')?.valid).toBeFalse();

    });

    it('should have email invalid if email is not valid', () => {
        form.get('email')?.setValue('test');
        expect(form.get('email')?.valid).toBeFalse();
    
    })

    it('should have email valid if email valid', () => {
        form.get('email')?.setValue('paco@paco.com');
        expect(form.get('email')?.valid).toBeTruthy();
    
    })

    it('should have email valid form', () => {
        form.get('email')?.setValue('paco@paco.com');
        form.get('password')?.setValue('paco');
        expect(form.valid).toBeTruthy();
    
    })

})