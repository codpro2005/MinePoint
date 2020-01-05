import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterViewInit } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';
import { TranslateService } from 'src/services/translate.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageEnum } from 'src/data/languages';
import { MatSlider } from '@angular/material/slider';
import { absoluteRoute } from 'src/data/routes';
import { MatCheckbox } from '@angular/material/checkbox';

class Product {
  value: number;
  reward: string;
  label: string;
}

class ProductCondition extends Product {
  condition?: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false }) slider: MatSlider;
  @ViewChild('checkbox', { static: false }) checkbox: MatCheckbox;
  public setUpPayed: boolean;
  public sliderStartVal: number;
  public sliderDescriptionTranslated: string;
  public ram: number;
  public cost: number;
  private costMultiplier = 2;
  private dialogResult: any;

  constructor(
    private paymentService: PaymentService,
    private translateService: TranslateService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userService.updateUser()
      .subscribe(user => this.setUpPayed = user ? user.setUp : false);
    const sliderStartVal = 4;
    this.sliderStartVal = sliderStartVal;
    this.update(sliderStartVal);
  }

  ngAfterViewInit() {
    this.slider.input.asObservable()
      .subscribe(slider => {
        this.update(slider.value);
      });
  }

  private update(value: number) {
    this.ram = value;
    this.cost = value * 2;
    this.sliderDescriptionTranslated = this.translateService.getCustomTranslated(`${this.cost} CHF pro Monat für ${this.ram}GB an Ram.`, `${this.cost} CHF per month for ${this.ram}GB of RAM.`, `每月${this.cost} CHF可获得${this.ram}GB的RAM`);
  }

  private getValidCondition(productConditions: ProductCondition[]): Product[] {
    const products: Product[] = [];
    productConditions.forEach(productCondition => {
      const condition = productCondition.condition;
      const finalCondition = condition != null ? condition : true;
      if (finalCondition) {
        products.push({
          value: productCondition.value,
          reward: productCondition.reward,
          label: this.getTranslated(productCondition.label),
        });
      }
    });
    return products;
  }

  private itemsToSingle(products: Product[]): Product {
    const product: Product = {
      value: 0,
      reward: '',
      label: '',
    };
    products.forEach(current => {
      const notLast = products.indexOf(current) !== products.length - 1;
      product.value += current.value;
      product.reward += `${current.reward}${notLast ? ',' : ''}`;
      product.label += `${current.label}${notLast ? ', ' : ''}`;
    });
    return product;
  }

  public onBuy(productConditions: ProductCondition[]) {
    this.userService.isAuthorized()
      .subscribe(isAuthorized => {
        if (isAuthorized) {
          const products = this.getValidCondition(productConditions);
          const product = this.itemsToSingle(products);
          this.paymentService.getOnetimePaymentLink(product.reward, product.value, product.label).subscribe(link => {
            const dialogRef = this.dialog.open(PaymentDialogComponent, {
              width: '750px',
              height: '600px',
              panelClass: 'paymentwall-dialog-container',
              data: { url: this.sanitizer.bypassSecurityTrustResourceUrl(link) }
            });

            dialogRef.afterClosed().subscribe(result => {
              this.dialogResult = result;
            });
          });
        } else {
          this.router.navigateByUrl(absoluteRoute.authenticate.self);
        }
      });
  }

  private getTranslated(value: string): string {
    return this.translateService.getTranslated(value);
  }
}
