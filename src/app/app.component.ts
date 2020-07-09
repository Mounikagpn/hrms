import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'hrms';
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('en');
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('lang changed detected', event);
			translate.setDefaultLang(event.lang);
		});
	}
}
