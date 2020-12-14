import { Component, OnInit } from '@angular/core';
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
  
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this._authService.register(this.email, this.password).then(res => {
      console.log(res);
    })
  }

  logout(){
    this._authService.logout();
  }
}
