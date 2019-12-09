import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public stripe = Stripe('pk_test_jS4nS4T4NoZdYnXaA4PvEXoL006YArfPaL'); // remove if other method doesn't work

  constructor() { }

  public showPayment(items: { value: number, label: string }[]) {
    // if (window.PaymentRequest) {
      const supportedPaymentMethods = [
        {
          supportedMethods: ['basic-card']
        }
      ];
      const paymentDetails = {
        displayItems: [],
        total: {
          label: null,
          amount: {
            currency: 'CHF',
            value: null,
          },
        }
      };
      const total = { value: 0, label: '' };
      items.forEach((item, index) => {
        paymentDetails.displayItems.push({
          label: item.label,
          amount: {
            currency: 'CHF',
            value: item.value.toString()
          }
        });
        total.value += item.value;
        total.label += index === 0 ? item.label : ` + ${item.label}`;
      });
      paymentDetails.total.amount.value = total.value.toString();
      paymentDetails.total.label = total.label;

      const options = {};
      const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);
      paymentRequest.show()
        .then(result => console.log(result))
        .catch(error => console.log(error));
    // } else {
    //   console.log('sup dude');
    // }
  }
}
