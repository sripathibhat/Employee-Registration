import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';

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
        path: 'users',
        component: EmployeeComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: 'failure',
        component: FailureComponent
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