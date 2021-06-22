import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import {FormlyModule} from "@ngx-formly/core";
import {FormlyFormModule} from "@gomcodoctor/gomco-common/formly-form/formly-form.module";


@NgModule({
  declarations: [ForgotPasswordComponent],
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        IconModule,
        MatIconModule,
        FormlyModule,
        FormlyFormModule
    ]
})
export class ForgotPasswordModule {
}
