import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberSeparatorDirective } from './number-separator.directive';

export * from './number-separator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NumberSeparatorDirective
  ],
  exports: [
    NumberSeparatorDirective,
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
