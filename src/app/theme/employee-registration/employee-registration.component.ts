import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http-service/http.service';
import { NotificationService } from 'src/app/service/notification-service/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import { getLocalTime } from 'src/app/shared/utils/utils';
@Component({
	selector: 'app-employee-registration',
	templateUrl: './employee-registration.component.html',
	styleUrls: [ './employee-registration.component.css' ]
})
export class EmployeeRegistrationComponent implements OnInit {
	registerForm: FormGroup;
	submitted = false;
	datePickerConfg: Partial<BsDatepickerConfig>;
	genders = [ 'male', 'female', 'other' ];
	martialStatus = [ 'Married', 'Single' ];
	constructor(
		private readonly router: Router,
		public readonly fb: FormBuilder,
		public httpService: HttpService,
		public readonly notificationService: NotificationService,
		public translate: TranslateService
	) {
		this.registerForm = fb.group({
			username: [
				'',
				[
					Validators.required,
					Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)
				]
			],
			password: [ '', [ Validators.required, Validators.minLength(6) ] ],
			firstname: [ '', Validators.required ],
			lastname: [ '', Validators.required ],
			dob: '',
			blood_group: '',
			gender: ''
		});
	}
	get f() {
		return this.registerForm.controls;
	}
	ngOnInit() {
		this.datePickerConfg = Object.assign({}, { dateInputFormat: 'DD-MM-YYYY', containerClass: 'theme-dark-blue' });
	}
	onSubmit() {
		this.submitted = true;
		if (this.registerForm.invalid) {
			return;
		} else {
			console.log(this.registerForm.value);
			let payload = this.registerForm.value;
			payload['dob'] = getLocalTime(payload['dob']);
			console.log(payload);

			this.httpService.doPost('registration', this.registerForm.value).subscribe((result) => {
				// if (!result.hasOwnProperty('access_token')) {
				console.log('test2');
				this.notificationService.showWarningNotification('', result['message']);
				if (result) {
					this.router.navigate([ '/login' ]);
				}
			});
		}
	}
}
