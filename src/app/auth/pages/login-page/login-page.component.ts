import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  public login: FormGroup;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb:FormBuilder,
    private loginService: AuthService) {
      this.login = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      })
    }

    handleSignUp() {
      console.log('Funcionando');

      console.log(this.login.value);

      this.loginService.login(this.login.value).subscribe({
        next: ( response ) => {
          console.log(response);

          const result = {
            name: response.user.name,
            email: response.user.email,
            token: response.user.token,

          }
          console.log(result);
          this.cookieService.set('user', JSON.stringify(result), 24,'/');
          this.router.navigate(['layout'])
        },
        error:(err) =>{
          console.log(err);

        }
      })
    }


}
