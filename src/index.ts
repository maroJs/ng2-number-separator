import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSeparatorDirective } from './number-separator.directive';
import { UtilsService } from './utils.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export * from './number-separator.directive';
export * from './utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NumberSeparatorDirective
  ],
  providers: [ UtilsService ],
  exports: [
    NumberSeparatorDirective
  ]
})
export class Ng2NumberSeparatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2NumberSeparatorModule,
      providers: []
    };
  }
}
