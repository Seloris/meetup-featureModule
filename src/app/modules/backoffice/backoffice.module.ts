import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { BackOfficeComponent } from './backoffice.component';
import { backOfficeRouting } from './backoffice.routing';
import { BackofficePage1Component } from './components/backoffice-page1/backoffice-page1.component';
import { BackofficePage2Component } from './components/backoffice-page2/backoffice-page2.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    backOfficeRouting,
    CoreModule,
    MatTabsModule
  ],
  declarations: [BackOfficeComponent, BackofficePage1Component, BackofficePage2Component]
})
export class BackOfficeModule { }
