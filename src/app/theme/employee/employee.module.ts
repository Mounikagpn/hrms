import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';

import { EmployeeRoutingModule } from './employee.routing';
import { SharedModule } from './../../shared/shared.module';
import { MatSidenavModule, MatTabsModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
@NgModule({
	declarations: [ EmployeeComponent, EmployeesListComponent, EmployeeDetailsComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MatSidenavModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		EmployeeRoutingModule,
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
export class EmployeeModule {}
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
