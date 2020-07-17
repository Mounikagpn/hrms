import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  coinwallet: string[] = ['Person Details','Education ', 'Visa Details','Salary and Benfits',' Dependents and Emergency Contact'];
  selectedwallet = this.coinwallet[0];
  employee: any;
  showGreenCardDetails: boolean=false;
  employeeContactDetails: void;
  constructor(private readonly router: Router,
		private readonly httpService: HttpService,
		private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeDetailsById()
  }
  getEmployeeDetailsById() {
    this.httpService.doGet('dashboard').subscribe((result :any) => {
       this.employee = result;
       this.employeeContactDetails=this.employee.contact_details.users
      console.log(this.employee.gc_job_title)
      if(this.employee.gc_job_title !== null)
      {
        debugger
this.showGreenCardDetails=true;
      }
			let id = 223;
		});
  }


}
// 530125