import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-createbug',
  templateUrl: './createbug.component.html',
  styleUrls: ['./createbug.component.scss']
})
export class CreatebugComponent implements OnInit {
  public bugCreationForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {
    this.bugCreation();
   }
   public bugCreation() {
    this.bugCreationForm = this.fb.group({
      'bugTitle': new FormControl("", Validators.compose([Validators.required])),
      'Priority': new FormControl("", Validators.compose([Validators.required])),
      'severity': new FormControl("", Validators.compose([Validators.required])),
      'Issue': new FormControl("", Validators.compose([Validators.required])),
      'Attachment': new FormControl(""),
      'description': new FormControl("", Validators.compose([])),
      'Environment':new FormControl("", Validators.compose([Validators.required])),
    })
  }

  public cancel() {
    this.route.navigate(['/project-management/project-view', { id: 1, tab: "bug" }])

  }
  ngOnInit() {
  }

}
