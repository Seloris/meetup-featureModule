import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class CoreModule {
}

 // Uncomment this and add .forRoot in AppModule
//  @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [UserComponent],
//   exports: [UserComponent]
// })
// export class CoreModule {

//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: CoreModule,
//       providers: [UserService]
//     };
//   }
// }


