import { Routes } from '@angular/router';
import { StartComponent } from './pages/start-page/start/start.component';
import { OptionsComponent } from './pages/options-page/options/options.component';
import { CreateComponent } from './pages/create-page/create/create.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { AboutComponent } from './pages/about-page/about/about.component';
import { DashboardComponent } from './pages/dashboard-page/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'', component: StartComponent, pathMatch:'full'},
    {path:'options', component:OptionsComponent},
    {path:'create', component:CreateComponent},
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'dashboard', component:DashboardComponent}
];
