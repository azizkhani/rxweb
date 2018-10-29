import { Validator,ValidatorFn, AbstractControl } from '@angular/forms';
export abstract class BaseValidator implements Validator{
    protected validator: ValidatorFn;
    protected validators:ValidatorFn[];

    validate(c: AbstractControl): {[key: string]: any} {
      return this.validator ? this.validator(c) : null;
    }
}
