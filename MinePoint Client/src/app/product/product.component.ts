import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';
import { TranslateService } from 'src/services/translate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('checkbox', { static: false }) checkbox: any;
  private supportedPaymentMethods: any[];
  private paymentDetails: any;
  private options: any;

  constructor(private paymentService: PaymentService, private translateService: TranslateService) { }

  ngOnInit() {
  }

  public onBuy(items: { value: number, label: string, condition?: boolean }[]) {
    const finalItems: { value: number, label: string }[] = [];
    items.forEach(item => {
      item.condition = item.condition != null ? item.condition : true;
      if (item.condition) {
        finalItems.push({
          value: item.value,
          label: this.getTranslated(item.label),
        });
      }
    });
    this.doPayment(finalItems);
  }

  private getTranslated(value: string): string {
    return this.translateService.getTranslated(value);
  }

  private doPayment(items: { value: number, label: string }[]) {
    this.paymentService.showPayment(items);
  }

}
