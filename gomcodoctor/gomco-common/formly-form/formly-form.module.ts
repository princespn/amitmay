import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyFormComponent} from './formly-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {RecaptchaModule} from 'ng-recaptcha';
import {LoadingModule} from '@gomcodoctor/gomco-common/loading/loading.module';
import {MatDialogModule} from '@angular/material/dialog';
import {ButtonsModule} from "@gomcodoctor/admin/buttons/buttons.module";


@NgModule({
  declarations: [FormlyFormComponent],
  exports: [
    FormlyFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule,
        FlexLayoutModule,
        MatButtonModule,
        RecaptchaModule,
        LoadingModule,
        MatDialogModule,
        ButtonsModule
    ]
})
export class FormlyFormModule { }
