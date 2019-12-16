import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';
import { TranslateService } from 'src/services/translate.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { absoluteRoute } from 'src/data/routes';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

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
  private absoluteRoute = absoluteRoute;
  private dialogResult: any;

  constructor(private paymentService: PaymentService,
              private translateService: TranslateService,
              private userService: UserService,
              private router: Router,
              private dialog: MatDialog,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public onBuy(items: { value: number, label: string, condition?: boolean }[]) {
    if (this.userService.isSignedIn()) {
      this.paymentService.GetOnetimePaymentLink().subscribe(link => {
        const dialogRef = this.dialog.open(PaymentDialogComponent, {
          width: '750px',
          height: '550px',
          data: { url: this.sanitizer.bypassSecurityTrustResourceUrl(link) }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.dialogResult = result;
        });
      });

      // const finalItems: { value: number, label: string }[] = [];
      // items.forEach(item => {
      //   item.condition = item.condition != null ? item.condition : true;
      //   if (item.condition) {
      //     finalItems.push({
      //       value: item.value,
      //       label: this.getTranslated(item.label),
      //     });
      //   }
      // });
      // this.doPayment(finalItems);
    } else {
      this.router.navigateByUrl(absoluteRoute.authenticate);
    }
  }

  private getTranslated(value: string): string {
    return this.translateService.getTranslated(value);
  }

  private doPayment(items: { value: number, label: string }[]) {
    this.paymentService.showPayment(items);
  }
}
