import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{clientManagmentRoutingModule} from './client-management.routing';
import {ClientListComponent} from './client-list/client-list.component';
import { ClientCreationComponent } from './client-creation/client-creation.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [ClientListComponent, ClientCreationComponent],
  imports: [
    CommonModule,
    clientManagmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule
    
  ]
})
export class ClientManagementModule { }
