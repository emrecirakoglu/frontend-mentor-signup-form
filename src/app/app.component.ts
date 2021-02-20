import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  emailTemplateVisile:boolean = false;

  constructor() {}

  onFocus() {
    this.emailTemplateVisile=false;
  }
  onFocusOut(){
    this.emailTemplateVisile = !this.signupForm.get("email").value;;
  }
}
