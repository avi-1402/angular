import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not be in working state if username is empty', async ()=>{
    await fixture.whenStable().then(async () => {
      const usernameElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameField');
      usernameElement.value = '';
      usernameElement.dispatchEvent(new Event('input'));

      const nameElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameField');
      nameElement.value = 'Avinav Jain';
      nameElement.dispatchEvent(new Event('input'));

      const emailElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailId');
      emailElement.value = 'avinav@email.com';
      emailElement.dispatchEvent(new Event('input'));

      const passwordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordField');
      passwordElement.value = '123456';
      passwordElement.dispatchEvent(new Event('input'));

      const repPasswordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#repeatedPasswordField');
      repPasswordElement.value = '123456';
      repPasswordElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      await fixture.whenStable().then(() => {
       // console.log(component.registerForm.get('username')?.value);
        const buttonElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#submitButton');
        expect(buttonElement.disabled).toBeTruthy();
        expect(component.registerForm.get('username')?.value).toBe('');
        expect(component.registerForm.get('name')?.value).toBe('Avinav Jain');
        expect(component.registerForm.get('email')?.value).toBe('avinav@email.com');
        expect(component.registerForm.get('password')?.value).toBe('123456');
        expect(component.registerForm.get('passwordConfirm')?.value).toBe('123456');
        expect(component.registerForm.valid).toBeFalsy();
      })

    })
  })
  
});
