import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
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
			}
		];
	}
}
