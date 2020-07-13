import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
	MatDividerModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
	MatListModule,
	MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

@NgModule({
	declarations: [ HeaderComponent, FooterComponent, SidebarComponent, MenuListItemComponent ],
	imports: [
		CommonModule,
		MatDividerModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		FlexLayoutModule,
		MatMenuModule,
		MatSidenavModule,
		MatListModule,
		RouterModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		})
	],
	exports: [ HeaderComponent, FooterComponent, SidebarComponent ]
})
export class SharedModule {}
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
