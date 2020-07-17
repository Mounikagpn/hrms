import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import {ClientListComponent} from './client-list/client-list.component';
import { ClientCreationComponent } from './client-creation/client-creation.component'
const routes: Routes = [
	
	{
		path: 'client-list',
		component: ClientListComponent
    },
    {
		path: 'client-creation',
		component: ClientCreationComponent
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class clientManagmentRoutingModule {}
