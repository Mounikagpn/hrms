import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import {projectManagmentRoutingModule} from '../project-management/project-mangement.routing'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {DemoMaterialModule} from '../../material-module';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { CreatebugComponent } from './createbug/createbug.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [ProjectListComponent, ProjectCreationComponent, ProjectViewComponent, TaskCreationComponent, CreatebugComponent],
  imports: [
    CommonModule,
    projectManagmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    AutocompleteLibModule,
    BsDatepickerModule
  ]
})
export class ProjectManagementModule { }
