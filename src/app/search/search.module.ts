import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { MicroProfileComponent } from './micro-profile/micro-profile.component';

@NgModule({
  declarations: [FormComponent, ResultComponent, MicroProfileComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule { }
