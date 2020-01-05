import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'src/services/translate.service';
import { MailService } from 'src/services/mail.service';
import { MyValidators } from 'src/data/my-validators';
import { UserService } from 'src/services/user.service';
import { StateEnum } from 'src/data/state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ViewChild('mainInput', { static: true }) mainInput: ElementRef;
  public contactForm: FormGroup;
  public emailstring: string;
  public state: StateEnum;
  public errorStatus: string;

  constructor(private formBuilder: FormBuilder, private mailService: MailService, private myValidators: MyValidators, private userService: UserService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      recipient: ['', [Validators.required, this.myValidators.email]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
    const userToken = this.userService.getUserToken();
    const user = userToken ? userToken.value : null;
    if (user) {
      this.contactForm.controls.recipient.setValue(user.mail);
    }

    // this.mainInput.nativeElement.focus();
  }

  public onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    this.state = StateEnum.Pending;
    this.mailService.sendMail(this.contactForm.value)
      .subscribe(
        () => this.state = StateEnum.Success,
        error => {
          const status = error.status;
          this.state = StateEnum.Error;
          this.errorStatus = status ? status : 'unknown';
        });
  }
}
