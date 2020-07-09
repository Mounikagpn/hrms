import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	@Output() toogleSideBarData: EventEmitter<any> = new EventEmitter();
	constructor(private readonly router: Router) {}

	ngOnInit() {}
	toggleSideBar() {
		this.toogleSideBarData.emit();
	}
	logout() {
		sessionStorage.clear();
		this.router.navigate([ '/login' ]);
	}
}
