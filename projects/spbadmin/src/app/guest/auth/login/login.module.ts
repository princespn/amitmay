import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        IconModule,
        MatTooltipModule,
        MatButtonModule,
        MatCheckboxModule,
        FormlyModule,
        FormlyFormModule
    ]
})
export class LoginModule {
}
