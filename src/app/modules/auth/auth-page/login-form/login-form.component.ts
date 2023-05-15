import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  styleUrls:['../style/form-style.css', "../style/messages.css"],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  form: FormGroup;
  submitted = false;

  constructor(
    formBuilder: FormBuilder,
  )
  {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)]
    })

  }
  onSubmit(){
    this.submitted = true;
    if (this.form.invalid){
      return;
    }
    this.Authorize();
  }
  private Authorize = () => {

  }
}
