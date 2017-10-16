import { Directive, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[numberSeparator]'
})
export class NumberSeparatorDirective {
    @Input('numberSeparator') numberSeparator:string = ' ';
    constructor() {
        console.log('start' + this.numberSeparator);
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        console.log('click' + this.numberSeparator);
    }
}
