import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { CoreModule } from './modules/core/core.module';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    appRouting,
    CoreModule// .forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
