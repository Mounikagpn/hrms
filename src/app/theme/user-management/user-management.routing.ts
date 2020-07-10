import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user-management.component';

import { fromEventPattern } from 'rxjs';
import { RolePriviligesComponent } from './role-priviliges/role-priviliges.component';
const routes: Routes = [
	{
		path: '',
		component: UserManagementComponent,
		children: [ { path: 'role-privileges', component: RolePriviligesComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UserManagementRoutingModule {}
