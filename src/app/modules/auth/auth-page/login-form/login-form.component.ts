import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../../models/IUser";
import {AuthService} from "../../../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";

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
    private authService: AuthService,
    private toastrService: ToastrService
  )
  {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }
  onSubmit(){
    this.submitted = true;
    console.log(this.form.invalid)
    if (this.form.invalid){
      return;
    }
    this.Authorize();
  }
  private Authorize = () => {
    const user: IUser = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.authService.login(user).subscribe({
      next: value => {
        this.toastrService.success("Success", "You are logged in")
      },
      error: err => {
        this.toastrService.error("Error", err.error.message)
      }
    })
  }
}
