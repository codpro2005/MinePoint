import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/data/user';
import { MyValidators } from 'src/data/my-validators';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/services/user.service';
import * as moment from 'moment';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from 'src/services/translate.service';
import { ErrorMessagesService } from 'src/services/error-messages.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public responseError: string;
  @ViewChild('mainInput', { static: true }) mainInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private myValidators: MyValidators, private cookieService: CookieService, private userService: UserService, private router: Router, private errorMessagesService: ErrorMessagesService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      mail: ['', [Validators.required, this.myValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), this.myValidators.charsInRange('0-9', 'digit'), this.myValidators.charsInRange('A-Z', 'upper')]],
    });

    // this.mainInput.nativeElement.focus();
  }

  public getPasswordMinLengthError(): string {
    return this.errorMessagesService.getPasswordMinLengthError(this.signInForm.controls.password.errors.minlength.requiredLength);
  }

  public getPasswordMaxLengthError() {
    return this.errorMessagesService.getPasswordMaxLengthError(this.signInForm.controls.password.errors.maxlength.requiredLength);
  }

  public getPasswordDigitMinError() {
    return this.errorMessagesService.getPasswordDigitMinError(this.signInForm.controls.password.errors.digitMin.minAmount);
  }

  public getPasswordUpperMinError() {
    return this.errorMessagesService.getPasswordUpperMinError(this.signInForm.controls.password.errors.upperMin.minAmount);
  }

  public onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    const user: User = this.signInForm.value;

    this.userService.login(user)
      .subscribe(token => {
        if (token) {
          this.cookieService.delete('token');
          this.cookieService.set('token', JSON.stringify(token), moment().add(1, 'week').toDate(), '/');
          this.userService.checkAuthorized();
          this.router.navigateByUrl('/profile');
        } else {
          console.log('wrong password');
        }
      });
  }
}
