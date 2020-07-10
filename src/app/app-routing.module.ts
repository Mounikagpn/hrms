import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './theme/login/login.component';
import { EmployeeRegistrationComponent } from './theme/employee-registration/employee-registration.component';
import { UserManagementComponent } from './theme/user-management/user-management.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: '',
		component: DefaultComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'employee',
				loadChildren: './theme/employee/employee.module#EmployeeModule'
				// canActivate: [ AuthGuard ]
			},
			{
				path: 'user-management',
				loadChildren: './theme/user-management/user-management.module#UserManagementModule'
				// canActivate: [ AuthGuard ]
			},
			{
				path: 'task-management',
				loadChildren: './theme/task-management/task-management.module#TaskManagementModule'
				// canActivate: [ AuthGuard ]
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: EmployeeRegistrationComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
