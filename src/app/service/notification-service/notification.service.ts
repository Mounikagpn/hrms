import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	constructor(private _notificationSer: NotificationsService) {}
	public showSucessNotification(title: String, description: String) {
		return this._notificationSer.success(title, description, {
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: false,
			clickIconToClose: true,
			width: 400,
			height: 400
		});
	}
	public showErrorNotification(title: String, description: String) {
		return this._notificationSer.error(title, description, {
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: false,
			clickIconToClose: true,
			width: 400,
			height: 400
		});
	}
	public showWarningNotification(title: String, description: String) {
		return this._notificationSer.warn(title, description, {
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: false,
			clickIconToClose: true
		});
	}
}
