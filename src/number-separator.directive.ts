import { Directive, Input, HostListener, OnChanges, forwardRef, Attribute } from '@angular/core';
import { UtilsService } from './utils.service';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[numberSeparator][formControlName],[numberSeparator][formControl],[numberSeparator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumberSeparatorDirective), multi: true }
  ]
})
export class NumberSeparatorDirective implements Validator {
  @Input('numberSeparator') separator;
  @Input('numberMin') mini: string;
  @Input('numberMax') maxi: string;
  @Input('numberLength') length: string;

  constructor(private utilsService: UtilsService, @Attribute('name') public name: string) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let v = c.value;
    if (v) {
      // control value
      v = parseInt(v.replace(/[^0-9.,]/g, ''), 10);

      // min validator
      if (v && this.isValidParam(this.maxi) && v > parseInt(this.maxi, 10)  ) {
        return {
          max: false
        };
      }

      // max validator
      if (v && this.isValidParam(this.mini) && v < parseInt(this.mini, 10)  ) {
        return {
          min: false
        };
      }
    }


    return null;
  }

  isValidParam (param) {
    return param && this.utilsService.isNumeric(param);
  }

  getNumber(value) {
    value = value.replace(/[^0-9.,]/g, '');
    return value;
  }

  checkLength(value) {
    if (this.isValidParam(this.length) && value.length > parseInt(this.length, 10)) {
      value = value.slice(0, parseInt(this.length, 10));
    }
    return value;
  }

  @HostListener('input', ['$event'])
  onInput(data) {
    let value = this.utilsService.removeSeparator(data.target.value, this.separator);
    value = this.getNumber(value);
    if (this.utilsService.isNumeric(value)) {
      value = this.checkLength(value);
      data.target.value = this.utilsService.addSeparator(value, this.separator);
    }
  }

}
