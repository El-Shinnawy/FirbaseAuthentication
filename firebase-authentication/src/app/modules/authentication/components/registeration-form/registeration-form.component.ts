import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss']
})
export class RegisterationFormComponent implements OnInit {
  fullName: string;
  email: string;
  password: string;
  error: string = '';
  
  form: FormGroup;
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

  register(){
    if(this.form.invalid){
      return;
    }
    this._authService.register(this.email, this.password).then(res => {
      if(res.message) {
        this.error = res.message;
      }
      else {
        this.router.navigate(['/auth/login']);
      }
    })
  }

  logout(){
    this._authService.logout();
  }
}
