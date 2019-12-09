import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss']
})
export class PaymentRequestComponent implements AfterViewInit {
  @Input() amount: number;
  @Input() label: string;

  elements: any;
  paymentRequest: any;
  paymentRequestBtn: any;

  @ViewChild('payElement', { static: false }) payElement;

  constructor(private paymentService: PaymentService) { }

  ngAfterViewInit() {
    this.paymentRequest = this.paymentService.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        amount: this.amount,
        label: this.label,
      },
      // requestPayerName: true,
      // requestPayerEmail: true,
    });

    this.elements = this.paymentService.stripe.elements();

    this.paymentRequest.on('source', async (event) => {
      console.log(event);

      setTimeout(() => {
        event.complete('success');
      }, 1000);
    });

    this.paymentRequestBtn = this.elements.create('paymentRequestButton', {
      paymentRequest: this.paymentRequest,
      style: {
        paymentRequestButton: {
          type: 'buy',
          theme: 'dark',
        },
      }
    });

    this.mountButton();

    // this.paymentRequest = this.paymentService.stripe.paymentRequest({
    //   country: 'US',
    //   currency: 'usd',
    //   total: {
    //     amount: this.amount,
    //     label: this.label,
    //   },
    //   // requestPayerName: true,
    //   // requestPayerEmail: true,
    // });
    // this.elements = this.paymentService.stripe.elements();
    // this.paymentRequestBtn = this.elements.create('paymentRequestButton', {
    //   paymentRequest: this.paymentRequest,
    //   style: {
    //     paymentRequestButton: {
    //       type: 'buy',
    //       theme: 'dark',
    //     },
    //   }
    // });
    // this.paymentRequest.canMakePayment()
    //   .then(result => {
    //     if (result) {
    //       this.paymentRequestBtn.mount(this.payElement.nativeElement);
    //     } else {
    //       console.error('your browser is old school!');
    //     }
    //   });
  }

  async mountButton() {
    const result = await this.paymentRequest.canMakePayment();

    if (result) {
      this.paymentRequestBtn.mount(this.payElement.nativeElement);
    } else {
      console.error('your browser is old school!');
    }
  }
}
