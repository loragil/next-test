import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // imports: [RouterModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
