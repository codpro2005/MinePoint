import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/data/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public responseError: string;
  @ViewChild('mainInput', { static: true }) mainInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.mainInput.nativeElement.focus();
  }

  public onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    const user: User = {
      ...this.signInForm.value
    };

    // this.httpService.getJWT(user).subscribe(
    //   resp => {
    //     const jwt = resp.headers.get(this.httpService.jwtKey);
    //     const jwtKey = this.httpService.jwtKey;
    //     this.cookieService.delete(jwtKey);
    //     this.cookieService.set(jwtKey, jwt);
    //     this.httpService.jwt = jwt;
    //     // const date = new Date();
    //     // const formattedDate = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+02');
    //     this.httpService.logCheckInTime().subscribe(() => this.router.navigateByUrl(''));
    //   },
    //   (error: ErrorEvent) => this.responseError = error.message);
  }
}
