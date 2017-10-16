import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  static price2str(value) {
    return ('' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

   isNumeric(value) {
    if ((undefined === value) || (null === value)) {
      return false;
    }
    if (typeof value === 'number') {
      return true;
    }
    if (!/^[0-9.,]+$/.test(value)) {
      return false;
    }
    if (!/^(?=.*\d)\d*[\.\,]?\d*$/.test(value)) {
      return false;
    }
    return !isNaN(parseFloat(value) - 0);
  }

  isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  addSeparator(value, separator) {
    if (value && separator) {
      value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return value;
  }

  removeSeparator(value, separator) {
    if (value && typeof value !== 'number') {
      switch (separator) {
        case ' ':
          value = value.toString().replace(/[\s]/g, '');
          break;
        case ',':
          value = value.toString().replace(/\,/g, '');
          break;
        default:
          value = value.toString().replace(/separator/g, '');
          break;
      }
    }
    return value;
  }

}
