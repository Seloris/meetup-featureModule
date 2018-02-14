import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'backoffice', loadChildren: './modules/backoffice/backoffice.module#BackOfficeModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
