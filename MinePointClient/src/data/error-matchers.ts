import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class PasswordConfirmErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (Boolean)((form.submitted || control.touched) && (form.hasError('differentPassword') || control.errors));
    }
}
