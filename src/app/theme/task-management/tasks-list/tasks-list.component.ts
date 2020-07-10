import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: [ './tasks-list.component.scss' ]
})
export class TasksListComponent implements OnInit {
	tasks;
	constructor() {}

	ngOnInit() {
		this.tasks = [
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			},
			{
				text: 'Dont use your mobile phone',
				date: '24-11-2019'
			}
		];
	}
}
