import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { CreatebugComponent } from './createbug/createbug.component'
const routes: Routes = [
	
	{
		path: 'project-list',
		component: ProjectListComponent
    },
    {
		path: 'project-creation',
		component: ProjectCreationComponent
    },
    {
		path: 'project-view',
		component: ProjectViewComponent
	},
    {
		path: 'task-creation',
		component: TaskCreationComponent
	},
	{
		path: 'createbug',
		component: CreatebugComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class projectManagmentRoutingModule {}
