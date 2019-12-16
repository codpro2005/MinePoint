import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/data/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private controller = 'Paymentwall';

  constructor(private http: HttpClient) { }

  public GetOnetimePaymentLink(): Observable<string> {
    return this.http.get<string>(`${api.root}/${api.sub}/${this.controller}/GetOnetimePaymentLink`, { responseType: 'text' as 'json' });
  }






















  public showPayment(items: { value: number, label: string }[]) {
    // // if (window.PaymentRequest) {
    //   const supportedPaymentMethods = [
    //     {
    //       supportedMethods: ['basic-card']
    //     }
    //   ];
    //   const paymentDetails = {
    //     displayItems: [],
    //     total: {
    //       label: null,
    //       amount: {
    //         currency: 'CHF',
    //         value: null,
    //       },
    //     }
    //   };
    //   const total = { value: 0, label: '' };
    //   items.forEach((item, index) => {
    //     paymentDetails.displayItems.push({
    //       label: item.label,
    //       amount: {
    //         currency: 'CHF',
    //         value: item.value.toString()
    //       }
    //     });
    //     total.value += item.value;
    //     total.label += index === 0 ? item.label : ` + ${item.label}`;
    //   });
    //   paymentDetails.total.amount.value = total.value.toString();
    //   paymentDetails.total.label = total.label;

    //   const options = {};
    //   const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);
    //   paymentRequest.show()
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error));
    // // } else {
    // //   console.log('sup dude');
    // // }
  }
}
