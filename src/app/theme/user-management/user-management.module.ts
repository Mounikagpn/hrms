import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementComponent } from './user-management.component';

import { UserManagementRoutingModule } from './user-management.routing';
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
import { RolePriviligesComponent } from './role-priviliges/role-priviliges.component';
@NgModule({
	declarations: [ UserManagementComponent, RolePriviligesComponent ],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MatSidenavModule,
		MatTabsModule,
		MatIconModule,
		MatButtonModule,
		UserManagementRoutingModule,
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
export class UserManagementModule {}
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
