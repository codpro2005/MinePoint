import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'src/services/translate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('sendMail', { static: false }) sendMail: ElementRef;
  private contactMail = 'info@minepoint.ch';
  public contactForm: FormGroup;
  public emailstring: string;
  @ViewChild('mainInput', { static: true }) mainInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private translateService: TranslateService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });

    // this.mainInput.nativeElement.focus();
  }

  email(control: FormControl) {
    // tslint:disable-next-line: max-line-length
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.exec(control.value) ? null : { email: true };
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.sendMail.nativeElement.href = `mailto:${this.contactMail}?Subject=${this.contactForm.value.subject}&body=${this.contactForm.value.body}%0D%0D${this.translateService.getTranslated('contactGreetings')} ${this.contactForm.value.name}`;
    this.sendMail.nativeElement.click();
  }
}
