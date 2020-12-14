import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;
  error:string;
  constructor(private _authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        email: ['',  [Validators.required, Validators.email] ],
        password: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  
  login(){
    if(this.form.invalid){
      return;
    }
    this._authService.login(this.email, this.password).then(res => {
      if(this._authService.isLoggedIn) {
        this.router.navigate(['/home']);
      }
      else if(res.message) {
        this.error = res.message;
      }
    })
  }
}
