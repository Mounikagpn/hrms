import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatTabsModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TaskManagementComponent } from './task-management.component';
import { TaskManagementRoutingModule } from './task-management.routing';
import { TasksListComponent } from './tasks-list/tasks-list.component';
@NgModule({
	declarations: [ TaskManagementComponent, TasksListComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MatSidenavModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		TaskManagementRoutingModule,
		BsDatepickerModule,
		MatTooltipModule,
		ModalModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		AgGridModule.withComponents([]),
		AccordionModule.forRoot()
	],
	providers: []
})
export class TaskManagementModule {}
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
