import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'lazy' },
    { path: 'lazy', loadChildren: './modules/lazy/lazy.module#LazyModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
