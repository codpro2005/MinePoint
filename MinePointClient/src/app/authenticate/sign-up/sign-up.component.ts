import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/data/user';
import { UserService } from 'src/services/user.service';

class PasswordConfirmErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return (Boolean)((form.submitted || control.touched) && (form.hasError('differentPassword') || control.errors));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild('mainInput', { static: true }) mainInput: ElementRef;
  public signUpForm: FormGroup;
  public passwordErrorMatcher = new PasswordConfirmErrorMatcher();
  public responseSuccess: boolean;
  public responseError: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    }, { validators: [this.passwordConfirmed] });

    // this.mainInput.nativeElement.focus();
  }

  private passwordConfirmed(formGroup: FormGroup): any {
    return formGroup.value.password === formGroup.value.passwordConfirm ? null : { differentPassword: true };
  }

  public onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const user: User = {
      username: this.signUpForm.value.username,
      password: this.signUpForm.value.password,
    };

    this.userService.createUser(user).subscribe(res => console.log(res));

    //   this.httpService.createUser(user).subscribe(
    //     () => {
    //       this.responseError = undefined;
    //       this.responseSuccess = true;
    //       setTimeout(() => this.router.navigateByUrl(AuthenticationPath.SignIn), 1000);
    //     },
    //     (error: ErrorEvent) => this.responseError = error.message);
    // }
  }
}
