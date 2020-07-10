import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
	selector: 'app-user-management',
	templateUrl: './user-management.component.html',
	styleUrls: [ './user-management.component.scss' ]
})
export class UserManagementComponent implements OnInit {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('lang changed detected', event);
			translate.setDefaultLang(event.lang);
		});
	}

	ngOnInit() {}
}
