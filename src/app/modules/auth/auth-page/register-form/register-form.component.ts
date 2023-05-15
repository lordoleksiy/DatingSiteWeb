import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {passwordMatchValidator} from "./passwordValidator";

@Component({
  selector: 'app-register-form',
  styleUrls:['../style/form-style.css', "../style/messages.css"],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  submitted = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  )
  {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordAgain: ['']
    },
      {
        validators: [passwordMatchValidator()]
      })

  }
  onSubmit(){
    this.submitted = true;
    if (this.form.invalid){
      return;
    }
    this.CreateUser();
  }
  private CreateUser = () =>{

  }
}
