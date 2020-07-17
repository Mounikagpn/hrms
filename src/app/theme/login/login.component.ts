import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http-service/http.service';
import { NotificationService } from 'src/app/service/notification-service/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	hide: boolean = true;

	constructor(
		public readonly fb: FormBuilder,
		public httpService: HttpService,
		public readonly notificationService: NotificationService,
		public translate: TranslateService,
		private readonly router: Router
	) {
		this.loginForm = fb.group({
			username: [
				'',
				[
					Validators.required,
					Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)
				]
			],
			password: [ '', [ Validators.required, Validators.minLength(6) ] ]
		});
	}
	get f() {
		return this.loginForm.controls;
	}

	ngOnInit() {}
	onSubmit() {
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		} else {
			this.httpService.doPost('login', this.loginForm.value).subscribe((result) => {
			localStorage.setItem("access-token",result.access_token)
			// localStorage.setItem("employeedetails",result)
				this.notificationService.showSucessNotification('Login Successfully', '');
				this.router.navigate([ '/user-management/role-privileges' ]);
			});
		}
	}
	myFunction() {
		this.hide = !this.hide;
	}
}
