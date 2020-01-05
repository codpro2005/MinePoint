import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidators } from 'src/data/my-validators';
import { MailService } from 'src/services/mail.service';
import { StateEnum } from 'src/data/state';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  // @ViewChild('mainInput', { static: true }) mainInput: ElementRef;
  public resetForm: FormGroup;
  public state: StateEnum;
  public errorStatus: string;
  public userFound: boolean;

  constructor(private formBuilder: FormBuilder, private myValidators: MyValidators, private mailService: MailService) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      mail: ['', [Validators.required, this.myValidators.email]]
    });

    // this.mainInput.nativeElement.focus();
  }

  public onSubmit() {
    if (this.resetForm.invalid) {
      return;
    }

    this.state = StateEnum.Pending;
    this.mailService.sendPasswordForgottenMail(this.resetForm.value.mail)
      .subscribe(
        success => {
          this.state = StateEnum.Success;
          this.userFound = success;
        },
        error => {
          const status = error.status;
          this.state = StateEnum.Error;
          this.errorStatus = status ? status : 'unknown';
        });
  }
}
