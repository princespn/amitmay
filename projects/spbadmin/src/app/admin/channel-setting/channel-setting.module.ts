import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelSettingRoutingModule } from './channel-setting-routing.module';
import { ListComponent } from './list/list.component';
import {MatButtonModule} from '@angular/material/button';
import {NamedRouteModule} from '@gomcodoctor/_helper/named-route/named-route.module';
import {ListModule} from '@gomcodoctor/gomco-common/list/list.module';
import {FormlyFormModule} from '@gomcodoctor/gomco-common/formly-form/formly-form.module';
import {ButtonsModule} from "@gomcodoctor/admin/buttons/buttons.module";


@NgModule({
  declarations: [ListComponent],
    imports: [
        CommonModule,
        ChannelSettingRoutingModule,
        MatButtonModule,
        NamedRouteModule,
        ListModule,
        FormlyFormModule,
        ButtonsModule
    ]
})
export class ChannelSettingModule { }
