import { Component, OnInit } from '@angular/core';
import { StringResourcesTitles, StringResourcesPlaceholders, StringResourcesButtons, StringResourcesLabels, StringResourceErrors } from 'src/app/shared/common/config-en';
import { GlobalValues } from '../../../shared/common/global';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { projectCreation, organization, projectManager, client } from 'src/app/shared/common/model/project.model';
@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent implements OnInit {

  datePickerConfg: Partial<BsDatepickerConfig>;
  public _stringResourcesTitles: StringResourcesTitles = new StringResourcesTitles();
  public _stringResourcesPlaceholder: StringResourcesPlaceholders = new StringResourcesPlaceholders();
  public _stringResourcesButtons: StringResourcesButtons = new StringResourcesButtons();
  public _stringResourcesLabels: StringResourcesLabels = new StringResourcesLabels();
  public projectmanagerForm: FormGroup;
  public projectObject: projectCreation;
  public enums: any;
  public managers: any;
  public employees: any;
  public organizationId: String;
  clients: any;
 
  // Validators.pattern('^[a-zA-Z]+[ _a-zA-Z0-9]*$')
  minDate: any;
  authorityName: any = "MANAGE PROJECTS";
  employeeId: string;
  ProjectId: any;
  clientDropDown: void;
  projectDropdown: any;
  UpdateBtn: boolean;

  
  

  constructor(private global: GlobalValues,private fb: FormBuilder,) { 
    this.createForm();
    this.projectObject = new projectCreation();
      }
  createForm() {
    this.projectmanagerForm = this.fb.group({

    projectName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(75),])),
    startDate: new FormControl("", Validators.compose([Validators.required])),
    client: new FormControl("", Validators.compose([Validators.required])),
    projectManager: new FormControl("", Validators.compose([Validators.required])),
    projectManagerContact: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('^[0-9]+[0-9]')])),
    projectType: new FormControl('', Validators.required),
    endDate: new FormControl("")
      

      // contacts :  this.fb.array([this.fb.group({
      //   contactName: ['', Validators.required],

      
    });
    console.log(this.projectmanagerForm)



  }
  ngOnInit() {
  }

}
