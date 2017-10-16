# ng2-number-separator
Angular 2 directive to add number separator for html input  (eg: 30 000) with all native validators of number input (min,max,length)

## Installation

To install this library, run:

```bash
$ npm install ng2-number-separator --save
```

## Integration
Add the module to your Angular `AppModule`:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { Ng2NumberSeparatorModule } from 'ng2-number-separator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as import
    Ng2NumberSeparatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use the directive in `input` tag with `type="text"`
```xml
<!-- You can now use the directive numberSeparator in app.component.html -->
<!-- separator, max, min, length are the attributes from app.component.ts -->
    <input type="text" [numberSeparator]="separator" [(ngModel)]="title" name="title" [numberMax]="max" [numberMin]="min" [numberLength] ="length" formControlName="title" required>
```

## Parameters
The directive parameter is required to activate:
`numberSeparator`(Required): the directive attribute contain the separator.
The directive have 3 optional params:
`numberMin`(Optional): input min validation.
`numberMax`(Optional): input max validation .
`numberLength`(Optional): input Length validation.


## Demo

you can test the directive by running the demo project in localhost.
install angular cli global:
```bash
npm install -g @angular/cli
```
go to demoApp
```bash
cd demoApp
```
install the demo node modules
```bash
npm install
```

run the demo project:
```bash
npm start
```

Go to http://localhost:4200/
## License

MIT © [Marouane ben guerfa](mailto:marwen.b.garfa@gmail.com)
