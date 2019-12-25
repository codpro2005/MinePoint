import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/data/user';
import { UserService } from 'src/services/user.service';
import { MyValidators } from 'src/data/my-validators';
import { TranslateService } from 'src/services/translate.service';
import { ErrorMessagesService } from 'src/services/error-messages.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private myValidators: MyValidators, private errorMessagesService: ErrorMessagesService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      mail: ['', [Validators.required, this.myValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), this.myValidators.charsInRange('0-9', 'digit'), this.myValidators.charsInRange('A-Z', 'upper')]],
      passwordConfirm: ['', [Validators.required]],
    }, { validators: [this.passwordConfirmed] });

    // this.mainInput.nativeElement.focus();
  }

  private passwordConfirmed(formGroup: FormGroup): any {
    return formGroup.value.password === formGroup.value.passwordConfirm ? null : { differentPassword: true };
  }

  public getPasswordMinLengthError(): string {
    return this.errorMessagesService.getPasswordMinLengthError(this.signUpForm.controls.password.errors.minlength.requiredLength);
  }

  public getPasswordMaxLengthError() {
    return this.errorMessagesService.getPasswordMaxLengthError(this.signUpForm.controls.password.errors.maxlength.requiredLength);
  }

  public getPasswordDigitMinError() {
    return this.errorMessagesService.getPasswordDigitMinError(this.signUpForm.controls.password.errors.digitMin.minAmount);
  }

  public getPasswordUpperMinError() {
    return this.errorMessagesService.getPasswordUpperMinError(this.signUpForm.controls.password.errors.upperMin.minAmount);
  }

  public onSubmit() {
    console.log(this.signUpForm.controls.password.errors);
    if (this.signUpForm.invalid) {
      return;
    }

    const user: User = {
      mail: this.signUpForm.value.mail,
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
