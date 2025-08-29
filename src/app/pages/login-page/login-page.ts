import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  constructor(protected auth: AuthService, private router: Router) {}

  names = '';
  passwords = '';

  onLogin() {
    console.log(this.names, this.passwords);
    console.log(this.auth.login(this.names, this.passwords))
    if(this.auth.login(this.names, this.passwords)) {
      this.router.navigate(['player']);
      console.log('%cПереход??','color:red');
    }
    console.log(this.auth.userNick());
  }

  activate() {
    const username = signal('Гость');
    username.set(this.names)
    console.log(username());
  }


  protected readonly AuthService = AuthService;
  protected readonly ononline = ononline;
}
