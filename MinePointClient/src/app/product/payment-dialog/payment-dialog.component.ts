import { Component, Inject, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IPaymentDialogData {
    url: string;
}

@Component({
    selector: 'app-payment-dialog',
    templateUrl: './payment-dialog.component.html',
    styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit, AfterViewInit {
    // @ViewChild('frame', { static: false }) frame: ElementRef;
    public isLoaded: boolean;
    public frameStyle: any;
    private loadCounter = 0;
    private realLoadIndex: number;

    constructor(
        public dialogRef: MatDialogRef<PaymentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IPaymentDialogData) { }

    ngOnInit() {
        const isWebkit = (document.documentElement.style as any).webkitLineBreak === '';
        this.realLoadIndex = isWebkit ? 1 : 0;
    }

    ngAfterViewInit() {
        // const style = this.frame.nativeElement.style;
        // this.frameStyle = style;
        // style.display = 'none';
    }

    // resizeIframe(obj) {
    //     console.log(obj);
    //     obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    //   }

    onCloseClick(): void {
        this.dialogRef.close();
    }

    onLoad() {
        if (this.loadCounter === this.realLoadIndex) {
            this.isLoaded = true;
            // const style = this.frameStyle;
            // style.display = '';
        }
        this.loadCounter++;
    }
}