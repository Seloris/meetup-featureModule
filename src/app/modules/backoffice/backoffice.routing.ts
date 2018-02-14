import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackOfficeComponent } from './backoffice.component';
import { BackofficePage1Component } from './components/backoffice-page1/backoffice-page1.component';
import { BackofficePage2Component } from './components/backoffice-page2/backoffice-page2.component';

const routes: Routes = [
    {
        path: '',
        component: BackOfficeComponent,
        children: [
            { path: '', redirectTo: 'page1', pathMatch: 'full' },
            { path: 'page1', component: BackofficePage1Component },
            { path: 'page2', component: BackofficePage2Component }
        ]
    }
];

export const backOfficeRouting: ModuleWithProviders = RouterModule.forChild(routes);
