import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http-service/http.service';
@Component({
	selector: 'app-role-priviliges',
	templateUrl: './role-priviliges.component.html',
	styleUrls: [ './role-priviliges.component.scss' ]
})
export class RolePriviligesComponent implements OnInit {
	rolePrivilegesForm: FormGroup;
	rolesData;
	selectedRoleId = 0;
	submitted = false;
	constructor(private readonly fb: FormBuilder, private readonly httpService: HttpService) {
		this.rolePrivilegesForm = this.fb.group({
			role_name: [ '', Validators.required ]
		});
	}
	authId: any;
	list1: any = [];
	list2: any = [];
	privilegesKey: any = [];
	public selectedRole = [];
	privilegesData = {
		// 'LEAVE MANAGEMENT': [
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:50 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e0007',
		// 		authorityName: 'MANAGE LEAVES(LOCATION WISE)',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE LEAVES(LOCATION WISE)'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:51 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e0009',
		// 		authorityName: 'MANAGE LEAVES',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE LEAVES'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:51 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e000f',
		// 		authorityName: 'MANAGE TEAM LEAVES',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE TEAM LEAVES'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:51 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e0011',
		// 		authorityName: 'MANAGE LEAVES(ORGANIZATION WISE)',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE LEAVES(ORGANIZATION WISE)'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:52 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e0017',
		// 		authorityName: 'CALENDAR APPROVALS',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'CALENDAR APPROVALS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:53 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e001f',
		// 		authorityName: 'MANAGE POLICIES',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE POLICIES'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:04 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:53 UTC',
		// 		version: 85,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd8bf016cadd8d41e0022',
		// 		authorityName: 'POLICY APPROVALS',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'POLICY APPROVALS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-11-05 06:58:33 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:52 UTC',
		// 		version: 6,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6e3a5b87016e3a5ba6990005',
		// 		authorityName: 'MANAGE CALENDAR',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE CALENDAR'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-11-05 06:58:33 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2019-11-11 01:21:53 UTC',
		// 		version: 6,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6e3a5b87016e3a5baf250008',
		// 		authorityName: 'OVER TIME APPROVALS',
		// 		appModuleName: 'LEAVE MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'OVER TIME APPROVALS'
		// 	}
		// ],
		// 'PROJECT MANAGEMENT': [
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:36 UTC',
		// 		version: 286,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd9299f0001',
		// 		authorityName: 'MANAGE SPRINT BACKLOGS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE SPRINT BACKLOGS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 286,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd92af60005',
		// 		authorityName: 'MANAGE PROJECT TASKS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE PROJECT TASKS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 286,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd92cfb0007',
		// 		authorityName: 'MANAGE PROJECTS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE PROJECTS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:36 UTC',
		// 		version: 286,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd9331a000b',
		// 		authorityName: 'MANAGE PROJECT SPRINTS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE PROJECT SPRINTS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 285,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd9338f000c',
		// 		authorityName: 'PROJECT APPROVALS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'PROJECT APPROVALS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-20 07:06:26 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 286,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cadd90f016cadd934ee000e',
		// 		authorityName: 'MANAGE CLIENTS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE CLIENTS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-08-22 06:17:37 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:36 UTC',
		// 		version: 271,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6cb7f916016cb7f939a20000',
		// 		authorityName: 'CLIENT APPROVALS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'CLIENT APPROVALS'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-09-05 06:31:23 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:36 UTC',
		// 		version: 224,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6d001eba016d001ee2f20002',
		// 		authorityName: 'MANAGE BUGS(MANAGER)',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE BUGS(MANAGER)'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-09-05 06:31:23 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 223,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6d001eba016d001ee5900003',
		// 		authorityName: 'MANAGE BUGS(DEVELOPER)',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE BUGS(DEVELOPER)'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-09-05 06:31:23 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:36 UTC',
		// 		version: 224,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6d001eba016d001ee92d0004',
		// 		authorityName: 'MANAGE BUGS(TESTER)',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE BUGS(TESTER)'
		// 	},
		// 	{
		// 		createdBy: null,
		// 		createdDate: '2019-11-05 06:57:00 UTC',
		// 		lastModifiedBy: null,
		// 		lastModifiedDate: '2020-07-02 03:41:37 UTC',
		// 		version: 139,
		// 		status: 1,
		// 		additionalDatas: [],
		// 		response: null,
		// 		authorityId: '4028810f6e3a5a16016e3a5a44580003',
		// 		authorityName: 'MANAGE TEAM TRACKERS',
		// 		appModuleName: 'PROJECT MANAGEMENT',
		// 		isDefault: false,
		// 		isAdmin: false,
		// 		authority: 'MANAGE TEAM TRACKERS'
		// 	}
		// ],
		'EMPLOYEE MANAGEMENT': [
			{
				createdBy: null,
				createdDate: '2019-11-13 02:27:24 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 128,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '2c9f876f6e65291a016e652975410000',
				authorityName: 'VIEW SALARY',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'VIEW SALARY'
			},
			{
				createdBy: null,
				createdDate: '2019-11-13 02:27:24 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 128,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '2c9f876f6e65291a016e652975410001',
				authorityName: 'CALENDAR APPROVALS',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'CALENDAR APPROVALS'
			},
			{
				createdBy: null,
				createdDate: '2019-11-13 02:27:24 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 127,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '2c9f876f6e65291a016e65297a450002',
				authorityName: 'MANAGE CALENDAR',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'MANAGE CALENDAR'
			},
			{
				createdBy: null,
				createdDate: '2019-08-20 07:06:04 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:36 UTC',
				version: 392,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '4028810f6cadd8bf016cadd8d41e000e',
				authorityName: 'MANAGE ADDRESS',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'MANAGE ADDRESS'
			},
			{
				createdBy: null,
				createdDate: '2019-08-20 07:06:04 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 390,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '4028810f6cadd8bf016cadd8d41e0018',
				authorityName: 'MANAGE EMPLOYEES',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'MANAGE EMPLOYEES'
			},
			{
				createdBy: null,
				createdDate: '2019-08-20 07:06:04 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 390,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '4028810f6cadd8bf016cadd8d41e0023',
				authorityName: 'MANAGE USER',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'MANAGE USER'
			},
			{
				createdBy: null,
				createdDate: '2019-09-19 11:29:50 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 195,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '402881c26d4948f6016d494928f30000',
				authorityName: 'MANAGE INSURANCE POLICY',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'MANAGE INSURANCE POLICY'
			},
			{
				createdBy: null,
				createdDate: '2019-09-19 11:29:50 UTC',
				lastModifiedBy: null,
				lastModifiedDate: '2020-07-02 03:41:37 UTC',
				version: 195,
				status: 1,
				additionalDatas: [],
				response: null,
				authorityId: '402881c26d4948f6016d49492a260001',
				authorityName: 'INSURANCE POLICY APPROVALS',
				appModuleName: 'EMPLOYEE MANAGEMENT',
				isDefault: false,
				isAdmin: false,
				authority: 'INSURANCE POLICY APPROVALS'
			}
		]
	};
	get f() {
		return this.rolePrivilegesForm.controls;
	}

	ngOnInit() {
		this.getRole();
		let privilage = Object.keys(this.privilegesData);
		console.log(privilage);
		for (let key of Object.keys(this.privilegesData)) {
			let list = [];
			for (let x of this.privilegesData[key]) {
				list.push(x);
			}
			this.privilegesKey.push({ Name: key, Value: list });
		}
		// this.rolesData = [ 'HR ADMIN', 'CHEIF ARCHITECT', 'QA - TESTER', 'EMPLOYEE' ];
	}
	addRole() {
		this.submitted = true;
		if (this.rolePrivilegesForm.invalid) {
			return;
		} else {
			this.httpService.doPost('createrole', this.rolePrivilegesForm.value).subscribe((result) => {
				this.getRole();
				this.rolePrivilegesForm.controls['role_name'].setValue('');
			});
		}
	}
	getRole() {
		this.httpService.doGet('getrole').subscribe((result) => {
			this.rolesData = result['Roles'];
		});
	}
	selectAuthority(data) {
		if (this.authId != data.authorityId) {
			document.getElementById(data.authorityId).classList.add('check');
			this.authId = data.authorityId;
			this.list1.push(this.authId);
			this.selectedRole.push(data.authorityId);
			// this.selectedRole = this.selectedRole.filter(e => e != data.authorityId);
		} else if (this.authId == data.authorityId) {
			document.getElementById(data.authorityId).classList.remove('check');
			this.list1.splice(this.authId, 1);
			this.list2.splice(this.authId, 1);
			this.selectedRole = this.selectedRole.filter((e) => e != data.authorityId);
		}

		console.log(this.selectedRole);
	}
}
