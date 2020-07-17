import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: [ './employee-details.component.css' ]
})
export class EmployeeDetailsComponent implements OnInit {
	coinwallet: string[] = ['Person Details','Education ', 'Visa Details','Salary and Benfits',' Dependents and Emergency Contact'];
  selectedwallet = this.coinwallet[0];
	getEmployeeDetails(id) {
		this.httpService.doPost('empdetails', { employee_number: id }).subscribe((result) => {
			this.employee = result;
			this.employee['firstname'] = result['first name'];
			this.employee['lastname'] = result['last name'];
			this.employee['middlename'] = result['middle name'];
			let id = 223;
		});
	}
	employee;
	employeeId;
	tabLoadTimes: Date[] = [];

	getTimeLoaded(index: number) {
		if (!this.tabLoadTimes[index]) {
			this.tabLoadTimes[index] = new Date();
		}

		return this.tabLoadTimes[index];
	}
	constructor(
		private readonly router: Router,
		private readonly httpService: HttpService,
		private readonly route: ActivatedRoute
	) {
		this.route.queryParams.subscribe((params) => {
			this.employeeId = params['id'];
			this.getEmployeeDetails(this.employeeId)
		});
	}

	ngOnInit() {
		// this.httpService.doPost('empdetails', { employee_number: this.employeeId }).subscribe((result) => {
		// 	this.employee = result;
		// 	this.employee['firstname'] = result['first name'];
		// 	this.employee['lastname'] = result['last name'];
		// 	this.employee['middlename'] = result['middle name'];
		// 	let id = 223;
		// });
	}
}
