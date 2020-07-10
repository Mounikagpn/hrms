import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { TaskManagementComponent } from './task-management.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
const routes: Routes = [
	{
		path: '',
		component: TaskManagementComponent,
		children: [ { path: 'tasks', component: TasksListComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TaskManagementRoutingModule {}
