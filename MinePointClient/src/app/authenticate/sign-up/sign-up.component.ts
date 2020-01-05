import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/data/user';
import { UserService } from 'src/services/user.service';
import { MyValidators } from 'src/data/my-validators';
import { TranslateService } from 'src/services/translate.service';
import { ErrorMessagesService } from 'src/services/error-messages.service';
import { CookieService } from 'ngx-cookie-service';
import { PasswordConfirmErrorMatcher } from 'src/data/error-matchers';
import { StateEnum } from 'src/data/state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // @ViewChild('mainInput', { static: true }) mainInput: ElementRef;
  public signUpForm: FormGroup;
  public passwordErrorMatcher = new PasswordConfirmErrorMatcher();
  public state: StateEnum;
  public errorStatus: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private myValidators: MyValidators, private errorMessagesService: ErrorMessagesService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      mail: ['', [Validators.required, this.myValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), this.myValidators.charsInRange('A-Z', 'upper'), this.myValidators.charsInRange('0-9', 'digit')]],
      passwordConfirm: ['', [Validators.required]],
    }, { validators: [this.myValidators.passwordConfirmed] });

    // this.mainInput.nativeElement.focus();
  }

  public getPasswordMinLengthError(): string {
    return this.errorMessagesService.getPasswordMinLengthError(this.signUpForm.controls.password.errors.minlength.requiredLength);
  }

  public getPasswordMaxLengthError(): string {
    return this.errorMessagesService.getPasswordMaxLengthError(this.signUpForm.controls.password.errors.maxlength.requiredLength);
  }

  public getPasswordDigitMinError(): string {
    return this.errorMessagesService.getPasswordDigitMinError(this.signUpForm.controls.password.errors.digitMin.minAmount);
  }

  public getPasswordUpperMinError(): string {
    return this.errorMessagesService.getPasswordUpperMinError(this.signUpForm.controls.password.errors.upperMin.minAmount);
  }

  public onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    const user: User = {
      id: null,
      mail: this.signUpForm.value.mail,
      password: this.signUpForm.value.password,
    };
    this.state = StateEnum.Pending;
    this.userService.createUserAndLogin(user)
      .subscribe(
        token => {
          this.state = StateEnum.Success;
          this.cookieService.delete('user');
          this.cookieService.set('user', JSON.stringify(token), new Date(token.session.expirationDate), '/');
          this.userService.checkAuthorized();
          this.router.navigateByUrl('/profile');
        },
        error => {
          const status = error.status;
          this.state = StateEnum.Error;
          this.errorStatus = status ? status : 'unknown';
        });
  }
}
