import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'src/services/translate.service';
import { MailService } from 'src/services/mail.service';
import { MyValidators } from 'src/data/my-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private contactMail = 'danilo.furrer@outlook.com';
  public contactForm: FormGroup;
  public emailstring: string;

  constructor(private formBuilder: FormBuilder, private mailService: MailService, private myValidators: MyValidators) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      mail: ['', [Validators.required, this.myValidators.email]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });

    // this.mainInput.nativeElement.focus();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.mailService.sendMail({...this.contactForm.value, recipient: this.contactMail}).subscribe(success => console.log(success));
  }
}
