import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'rl-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
 pageTitle: string = 'Registration';

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required])
  },
  { 
    validators:(control: AbstractControl) : ValidationErrors | null => {
      const password = control.get('password')?.value;
      const passwordConfirm = control.get('passwordConfirm')?.value;
      if ((password === passwordConfirm) && (password !== null && passwordConfirm !== null)) {
        return null;
      } else {
        return { passwordsNotMatching: true };
      }
    } 
  }
  );
  // constructor(
  //   private router: Router,
  //   private authService: AuthService
  // ) { }

  register() : void {
    if (!this.registerForm.valid) return;
    
  }
}
