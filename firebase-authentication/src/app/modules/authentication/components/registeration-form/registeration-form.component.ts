import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss']
})
export class RegisterationFormComponent implements OnInit {
  fullName: string;
  email: string;
  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
