import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { lazyRouting } from './lazy.routing';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    lazyRouting,
    CoreModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
