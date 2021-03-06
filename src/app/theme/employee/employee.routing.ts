import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
const routes: Routes = [
	{
		path: 'employees-list',
		component: EmployeesListComponent
	},
	{
		path: 'employee-details',
		component: EmployeeDetailsComponent
	},
	{
		path: 'employee-profile',
		component: EmployeeProfileComponent
	}
	
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EmployeeRoutingModule {}
