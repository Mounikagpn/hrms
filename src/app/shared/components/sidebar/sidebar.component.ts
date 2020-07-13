import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuItems } from '../../menu-items/menu-items';
import { TranslateService } from '@ngx-translate/core';
// import { NavItem } from '../../menu-list-item/menu-list-item.component';
import { NavService } from 'src/app/service/nav-service/nav.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit {
	username;
	menuItems;
	@ViewChild('appDrawer') appDrawer: ElementRef;
	// navItems = this.getMenuItems();
	// ngAfterViewInit() {
	// 	this.navService.appDrawer = this.appDrawer;
	// }
	constructor(private readonly translate: TranslateService, private menu: MenuItems, private navService: NavService) {
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
