import { FormControl, FormGroup } from '@angular/forms';

export class MyValidators {

  public email(control: FormControl): { [key: string]: boolean } | null {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.exec(control.value) ? null : { email: true };
  }

  public passwordConfirmed(formGroup: FormGroup): any {
    return formGroup.value.password === formGroup.value.passwordConfirm ? null : { differentPassword: true };
  }

  public charsInRange(validChars: string, name: string, min: number = 1, max: number = null): (control: FormControl) => { [key: string]: boolean } {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const controlValue: string = control.value;
      const matchAmount = controlValue.split(new RegExp(`[${validChars}]`)).length - 1;
      const minHasValue: boolean = typeof min === 'number';
      const maxHasValue: boolean = typeof max === 'number';
      const minValid: boolean = minHasValue ? matchAmount >= min : true;
      const maxValid: boolean = maxHasValue ? matchAmount <= max : true;
      if (minValid && maxValid) {
        return null;
      }
      const errors = {};
      const errorPrefix = minHasValue && maxHasValue ? 'Range' : minHasValue ? 'Min' : maxHasValue ? 'Max' : '';
      errors[`${name}${errorPrefix}`] = {
        minAmount: min,
        maxAmount: max,
        actualAmount: matchAmount,
      };
      return errors;
    };
  }
}
