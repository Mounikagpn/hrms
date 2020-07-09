import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {
	MatSidenavModule,
	MatTabsModule,
	MatButtonModule,
	MatIcon,
	MatIconModule,
	MatCardModule
} from '@angular/material';
import { EmployeesListComponent } from '../../theme/employees-list/employees-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from 'src/app/theme/login/login.component';
import { EmployeeDetailsComponent } from 'src/app/theme/employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from 'src/app/theme/employee-registration/employee-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
	declarations: [
		DefaultComponent,
		DashboardComponent,
		EmployeesListComponent,
		LoginComponent,
		EmployeeDetailsComponent,
		EmployeeRegistrationComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		BsDatepickerModule,
		ModalModule.forRoot(),
		MatSidenavModule,
		MatTabsModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		AgGridModule.withComponents([]),
		AccordionModule.forRoot()
	]
})
export class DefaultModule {}
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
