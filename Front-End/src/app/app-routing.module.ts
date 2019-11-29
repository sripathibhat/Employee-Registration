import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'employees',
        component: EmployeeComponent
    },
    {
        path: '**',
        component: AppComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
    
}