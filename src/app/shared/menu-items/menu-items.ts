import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { Permissions } from '../../shared/permissions/permissions';

export interface BadgeItem {
	type: string;
	value: string;
}

export interface ChildrenItems {
	state: string;
	target?: boolean;
	name: string;
	type?: string;
	children?: Array<ChildrenItems>;
}

export interface MainMenuItems {
	state: string;
	short_label?: string;
	main_state?: string;
	target?: boolean;
	name: string;
	type: string;
	icon: string;
	badge?: Array<BadgeItem>;
	children?: Array<ChildrenItems>;
	permission?: any;
}

export interface Menu {
	main: Array<MainMenuItems>;
	label?: string;
}

@Injectable()
export class MenuItems {
	constructor(private readonly translate: TranslateService) {}

	MENUITEMS = [
		{
			main: [
				{
					state: 'dashboard',
					name: 'Dashboard'
				},
				{
					state: 'employee/employees-list',
					name: 'Employee'
				},
				{
					state: 'user-management/role-privileges',
					name: 'User Management'
				},
				{
					state: 'task-management/tasks',
					name: 'Tasks'
				}
			]
		}
	];

	getAll(): any {
		return this.MENUITEMS;
	}
}
