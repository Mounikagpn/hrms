import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.scss']
})
export class TaskCreationComponent implements OnInit {
  hideUploadLocation: boolean;
  uploadLocationInExcel: FormGroup;
  constructor(private route:Router) {
    this.uploadLocationInExcel = new FormGroup({
      excelFile: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern(/([a-zA-Z0-9\s_\\.\-\(\):])+(.xls|.xlsx)$/)])),
    });
   }
   uploadLocationEvent(): void {
    this.hideUploadLocation = true;
  }
  public back() {
    this.route.navigate(['/project-management/project-view', { id:  1,tab:"task" }])
  }
  ngOnInit() {
  }

}
