import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;
  constructor(private _authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  login(){
    this._authService.login(this.email, this.password).then(res => {
      if(this._authService.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    })
  }
}
