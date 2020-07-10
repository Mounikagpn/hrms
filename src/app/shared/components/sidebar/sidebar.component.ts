import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../../menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {
	username;
	menuItems;
	constructor(private readonly translate: TranslateService, private menu: MenuItems) {
		this.menuItems = this.getMenuItems();
	}

	ngOnInit() {
		this.username = sessionStorage.getItem('username');
		console.log(this.getMenuItems());
	}
	getMenuItems(): any {
		this.menu = new MenuItems(this.translate);
		return this.menu.getAll()[0].main;
	}
}
