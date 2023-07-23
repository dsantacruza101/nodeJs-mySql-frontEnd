import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/models/newUser.interface';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})


export class RegisterPageComponent {

  public registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: AuthService,
    private router: Router) {

    this.registroForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPassword})
  }


  checkPassword(group: FormGroup): object | null {
    const password = group.controls['password'].value;
    const confirmPassword = group.controls['confirmPassword'].value;

    console.log( password === confirmPassword  ? null : { notSame: true });
    return password === confirmPassword  ? null : { notSame: true }

  }

  handleRegistration() {
    const { name, lastName, email, password } = this.registroForm.value;

    let newUser: NewUser = {
      name: name,
      lastName: lastName,
      email: email,
      password: password
    }

    this.registerService.register(newUser).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/auth/login'])
      },
      error: (err) => {
        console.log(err);

      }
    })


  }



}
