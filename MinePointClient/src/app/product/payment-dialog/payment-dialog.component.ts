import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface IPaymentDialogData {
    url: string;
}

@Component({
    selector: 'app-payment-dialog',
    templateUrl: './payment-dialog.component.html',
    styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<PaymentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IPaymentDialogData) { }

    ngOnInit() {

    }

    resizeIframe(obj) {
        console.log(obj);
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
      }

    onCloseClick(): void {
        this.dialogRef.close();
    }
}