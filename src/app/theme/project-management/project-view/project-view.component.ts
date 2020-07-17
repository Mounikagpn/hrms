import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
//import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  @ViewChild('newTaskModel') newTaskModel: ElementRef;

  datePickerConfg: Partial<BsDatepickerConfig>;
  uploadLocationInExcel: FormGroup;
  taskassign = new FormGroup({
    "taskSprint": new FormControl("", Validators.required)
  })

  taskForm = new FormGroup({
    "projectTaskName": new FormControl("", Validators.compose([Validators.required])),
    "estimatedTimeHours": new FormControl("", Validators.compose([Validators.required])),

  });
  selectedIndex: number = 0;
  Edit: boolean = true;
  showBackLog: boolean = false;
  config = {
    parallax: true,
    autoHeight: true,
    setWrapperSize: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
  };
  sprintForm = new FormGroup({
    "sprintNumber": new FormControl(""),
    "startDate": new FormControl("", Validators.compose([Validators.required])),
    "SprintPeriods": new FormControl("", Validators.compose([Validators.required])),

  })
  constructor(private route: Router) {

    this.uploadLocationInExcel = new FormGroup({
      excelFile: new FormControl('', Validators.compose([
        Validators.pattern(/([a-zA-Z0-9\s_\\.\-\(\):])+(.xls |.xlsx|.PNG|.jpg|.docx)$/)])),

    });
   }

  taskMove() {
    this.selectedIndex = 2
  }
  sprintMove() {
    this.selectedIndex = 1
  }
  bugMove() {
    this.selectedIndex = 4
  }
  public updateProject() {
    this.route.navigate(['/project-management/project-creation', { id: 1 }])
  }

  createTaskPopup() {
    this.Edit = true;
    this.newTaskModel.nativeElement.click();
  }
  taskCreationRoute() {
    this.route.navigate(['/project-management/task-creation', { id: 1 }]);
  }
  public editBug(b) {
    this.route.navigate(['/project-management/createbug', { bgid: 1, pid: 1}])
  }

  changeSprintStatusColor(INPROGRESS) {
    switch (INPROGRESS) {


      case 'YET TO START':
        this.showBackLog = true
        return 'orange';
        this.showBackLog = true
      case 'MOVED':
        this.showBackLog = true
        return 'green'

      case 'NEW':
        this.showBackLog = true
        return 'blue';
      case 'INPROGRESS':
        this.showBackLog = true
        return 'purple';
      case 'BACKLOG':
        this.showBackLog = false
        return 'red';
      case 'COMPLETED':
        this.showBackLog = false
        return 'green';
      case 'IN PROGRESS':
        this.showBackLog = true
        return 'blue';
    }
  }
  ngOnInit() {
  }

}
