import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth/auth.service";
import {passwordMatchValidator} from "./passwordValidator";
import {INewUser} from "../../../../models/INewUser";
import {ToastrService} from "ngx-toastr";

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
    private authService: AuthService,
    private toastrService: ToastrService
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
    const user: INewUser = {
      username: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.authService.register(user).subscribe({
      next: (val) => {
        console.log(val);
        this.toastrService.success("Success", "You are registered")
      },
      error: (err)=> {
        this.toastrService.error("Error", err.error.message)
      }
    })
  }
}
