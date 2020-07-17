import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http-service/http.service';
import { Observable } from 'rxjs';
import { Grid, GridOptions } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-employees-list',
	templateUrl: './employees-list.component.html',
	styleUrls: [ './employees-list.component.css' ]
})
export class EmployeesListComponent implements OnInit {
	gridApi;
	gridColumnApi;
	@ViewChild('employeeModal') employeeModal;

	columnDefs;
	defaultColDef;
	rowData: any;
	domLayout = 'autoHeight';
	paginationPageSize;
	employeeId;
	employee;
	constructor(private http: HttpClient, private readonly httpService: HttpService, private  router: Router) {
		this.columnDefs = [
			// {
			// 	headerName: '',
			// 	field: 'edit',
			// 	resizable: false,
			// 	cellRenderer: function(value) {
			// 		let newLink = `<img class="toggle-down" style="width: 19px;
			// 		margin: auto;" src="assets/images/ellipsis.jpg">`;
			// 		return newLink;
			// 	},
			// 	width: 60
			// },
			{
				headerName: 'Employee Number',
				field: 'employee_number',
				sortable: true,
				filter: true,
				cellRenderer: ({ value }) => {
					const a = document.createElement('a');
					a.innerText = a.href = value;
					a.target = '_blank';
					// Prevent click from reaching AgGrid
					a.addEventListener('click', (event) => {
						event.preventDefault();
						this.redirect(value);
					});
					return a;
				}
			},
			{ headerName: 'Last Name', field: 'lastname', sortable: true, filter: true },
			{ headerName: 'First Name', field: 'firstname', sortable: true, filter: true },
			{ headerName: 'Email', field: 'email', sortable: true, filter: true },
			{ headerName: 'Gender', field: 'gender', sortable: true, filter: true },
			// { headerName: 'Date of Birth', field: 'date_of_birth', sortable: true, filter: true },
			{
				headerName: 'Employment Start Date',
				field: 'employment_start_date',
				sortable: true,
				filter: true
			}
		];
		this.defaultColDef = { resizable: true };
		this.paginationPageSize = 5;
	}

	onFirstDataRendered(params) {
		params.api.sizeColumnsToFit();
	}

	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		
	}
	ngOnInit() {
		this.getEmployeeDetails()
	}
	getEmployeeDetails() {
		this.httpService.doGet('emplist').subscribe((result) => {
			this.rowData = result['Employees'];
			console.log(this.rowData,"this.rowData")
		});
	}
	redirect(id) {
		this.employeeId = id;
		this.httpService.doPost('empdetails', { employee_number: id }).subscribe((result) => {
			this.employee = result;
			this.employee['firstname'] = result['first name'];
			this.employee['lastname'] = result['last name'];
			this.router.navigate([ '/employee/employee-details' ], { queryParams: { id } });
			//this.employeeModal.show();
		});
	}
	close() {
		this.employeeModal.hide();
	}

	getEmployeView(list)
	{
		this.router.navigate([ '/employee/employee-details' ], { queryParams: {id: list.employee_number}  });
	}
}
