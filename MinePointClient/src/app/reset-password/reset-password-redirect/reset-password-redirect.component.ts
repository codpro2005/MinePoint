import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordConfirmErrorMatcher } from 'src/data/error-matchers';
import { StateEnum } from 'src/data/state';
import { MyValidators } from 'src/data/my-validators';
import { ErrorMessagesService } from 'src/services/error-messages.service';
import { UserService } from 'src/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/data/user';

@Component({
  selector: 'app-reset-password-redirect',
  templateUrl: './reset-password-redirect.component.html',
  styleUrls: ['./reset-password-redirect.component.scss']
})
export class ResetPasswordRedirectComponent implements OnInit {
  // @ViewChild('mainInput', { static: true }) mainInput: ElementRef;
  public resetPasswordRedirectForm: FormGroup;
  public passwordErrorMatcher = new PasswordConfirmErrorMatcher();
  public state: StateEnum;
  public errorStatus: string;
  public userFound: boolean;
  private userId: string;

  constructor(private formBuilder: FormBuilder, private myValidators: MyValidators, private errorMessagesService: ErrorMessagesService, private route: ActivatedRoute, private userService: UserService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    const segments = this.route.snapshot.url;
    this.userId = segments[segments.length - 1].path;
    this.resetPasswordRedirectForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), this.myValidators.charsInRange('A-Z', 'upper'), this.myValidators.charsInRange('0-9', 'digit')]],
      passwordConfirm: ['', [Validators.required]],
    }, { validators: [this.myValidators.passwordConfirmed] });
  }

  public getPasswordMinLengthError(): string {
    return this.errorMessagesService.getPasswordMinLengthError(this.resetPasswordRedirectForm.controls.password.errors.minlength.requiredLength);
  }

  public getPasswordMaxLengthError(): string {
    return this.errorMessagesService.getPasswordMaxLengthError(this.resetPasswordRedirectForm.controls.password.errors.maxlength.requiredLength);
  }

  public getPasswordDigitMinError(): string {
    return this.errorMessagesService.getPasswordDigitMinError(this.resetPasswordRedirectForm.controls.password.errors.digitMin.minAmount);
  }

  public getPasswordUpperMinError(): string {
    return this.errorMessagesService.getPasswordUpperMinError(this.resetPasswordRedirectForm.controls.password.errors.upperMin.minAmount);
  }

  public onSubmit() {
    if (this.resetPasswordRedirectForm.invalid) {
      return;
    }
    const user: User = {
      id: this.userId,
      mail: null,
      password: this.resetPasswordRedirectForm.value.password,
    };
    this.state = StateEnum.Pending;
    this.userService.updatePassword(user.id, user.password)
      .subscribe(
        token => {
          console.log(token);
          if (token) {
            this.userFound = true;
            this.cookieService.delete('user');
            this.cookieService.set('user', JSON.stringify(token), new Date(token.session.expirationDate), '/');
            this.userService.checkAuthorized();
            this.router.navigateByUrl('/profile');
          } else {
            this.userFound = false;
          }
        },
        error => {
          const status = error.status;
          this.state = StateEnum.Error;
          this.errorStatus = status ? status : 'unknown';
        });
  }

  // this.mainInput.nativeElement.focus();
}
