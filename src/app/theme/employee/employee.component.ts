import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: [ './employee.component.scss' ]
})
export class EmployeeComponent implements OnInit {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('lang changed detected', event);
			translate.setDefaultLang(event.lang);
		});
	}

	ngOnInit() {}
}
