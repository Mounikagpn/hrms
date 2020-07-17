import { Component, OnInit } from '@angular/core';
import { StringResourcesTitles, StringResourcesPlaceholders, StringResourcesButtons, StringResourcesLabels, StringResourceErrors } from 'src/app/shared/common/config-en';
import { GlobalValues } from '../../../shared/common/global';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { clientCreationModel, addressIdModel, clientContactsIdModel, pointOfContactModel } from 'src/app/shared/common/model/clientService.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http-service/http.service';

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css']
})
export class ClientCreationComponent implements OnInit {
  datePickerConfg: Partial<BsDatepickerConfig>;
  public _stringResourcesTitles: StringResourcesTitles = new StringResourcesTitles();
  public _stringResourcesPlaceholder: StringResourcesPlaceholders = new StringResourcesPlaceholders();
  public _stringResourcesButtons: StringResourcesButtons = new StringResourcesButtons();
  public _stringResourcesLabels: StringResourcesLabels = new StringResourcesLabels();
  public _StringResourceErrors: StringResourceErrors = new StringResourceErrors();
  public clientCreationForm: FormGroup;
  public clientCreatioObj: clientCreationModel;
  public addressesObj: addressIdModel;
  public clientContactModelObj: clientContactsIdModel;
  public contactObj: pointOfContactModel = new pointOfContactModel();
  public clientContactForm: FormGroup;

  constructor(private global: GlobalValues, private fb: FormBuilder,private http: HttpClient,private readonly httpService: HttpService) {
    this.datePickerConfg = Object.assign({}, {

      containerClass: 'theme-dark-blue',
      dateInputFormat: 'YYYY-MM-DD',
  
      showWeekNumbers: false,
    })
    this.createForm();
    this.clientCreatioObj = new clientCreationModel();
    this.addressesObj = new addressIdModel();
    this.clientContactModelObj = new clientContactsIdModel();
  }
  createForm() {
    this.clientCreationForm = this.fb.group({

      // clientContact: this.fb.array([this.fb.group({
      //   clientCoOrdinatorEmailId: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[(com)(in)]+$'), Validators.email])],
      //   clientCoOrdinatorPhoneNo: ['', Validators.required],
      //   coOrdinatorFirstName: ['', Validators.required],
      //   coOrdinatorLastName: ['', Validators.required],

      // })]),


      // contacts :  this.fb.array([this.fb.group({
      //   contactName: ['', Validators.required],

      // })]),
      clientName: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(75), Validators.pattern('^[a-zA-Z]+[ _a-zA-Z0-9]*$')])),
      personFirstName: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z_ ]+')])),
      // personLastName: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(75), Validators.pattern('^[a-zA-Z_ ]+')])),
      emailId: new FormControl(null, [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[(com)(in)]+$'), Validators.email])]),
      contactNumber: new FormControl(null, Validators.compose([Validators.required,])),
      contactPerson: new FormControl(null, Validators.compose([Validators.required,])),
      designation: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(75), Validators.pattern('^[a-zA-Z_ ]+')])),
      line1: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      line2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.compose([Validators.required, Validators.maxLength(75)])],
      landmark: [''],
      zipCode: ['', Validators.required],
      cropName: ['', Validators.required],
      vendorship: ['', Validators.required],
      vStartDate: ['', Validators.required],
      vEndDate: ['', Validators.required],
      masNumber: ['',],
      c2c: ['', Validators.required],
      contractName: ['', Validators.required],
      numberContract: ['', ],

      contractCellPhone: ['', Validators.required],
      cEffectiveDate: ['', Validators.required],
      CendDate: ['', Validators.required],
      termLimits: ['', ],
      BusinessSector: ['', Validators.required],

    });
    console.log(this.clientCreationForm)










  }

  ngOnInit() {
  }


  ////Client COntact

  setclientContact(clientContact: clientContactsIdModel[]) {
    const clientContactFGs = clientContact.map(clientContact => this.fb.group(clientContact));
    const clientContactFormArray = this.fb.array(clientContactFGs);
    this.clientCreationForm.setControl('clientContact', clientContactFormArray);
  }
  get clientContact(): FormArray {

    return this.clientCreationForm.get('clientContact') as FormArray;
  }

  addclientContact(i: any) {
    console.log(i, 'ival')
    if (i >= 1) {

      //this.addresses.push(this.fb.group(new addressIdModel()));
      let control = <FormArray>this.clientCreationForm.controls.clientContact;
      control.push(
        this.fb.group({
          clientCoOrdinatorEmailId: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[(com)(in)]+$'), Validators.email])],
          clientCoOrdinatorPhoneNo: ['', Validators.required],
          coOrdinatorFirstName: ['', Validators.required],
          coOrdinatorLastName: ['', Validators.required],
        })
      )
    } else {

      //this.addresses.push(this.fb.group(new addressIdModel()));
      let control = <FormArray>this.clientCreationForm.controls.clientContact;
      control.push(
        this.fb.group({
          clientCoOrdinatorEmailId: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[(com)(in)]+$'), Validators.email])],
          clientCoOrdinatorPhoneNo: ['', Validators.required],
          coOrdinatorFirstName: ['', Validators.required],
          coOrdinatorLastName: ['', Validators.required],
        })
      )
    }

  }
  removeclientContact(i) {
    let control = <FormArray>this.clientCreationForm.controls.clientContact;
    control.removeAt(i);
  }

  onSubmit() {
    let obj =
    {
      "Corp Name": this.clientContactForm.get('cropName').value,
      "Vendorship Type": this.clientContactForm.get('vendorship').value,
      "Vendorship Start Date": this.clientContactForm.get('vStartDate').value,
      "Vendorship End Date": this.clientContactForm.get('vEndDate').value,
      "Client Contract Details": this.clientContactForm.get('line1').value,
      "MSA Number": this.clientContactForm.get('masNumber').value,
      "Number Of Contracts":this.clientContactForm.get('numberContract').value,
      "Contract Name": this.clientContactForm.get('contractName').value,
      "Contract Effective Date":this.clientContactForm.get('cEffectiveDate').value,
      "C2C Limits": this.clientContactForm.get('c2c').value,
      "Contract End Date": this.clientContactForm.get('CendDate').value,
      "Term Limits": this.clientContactForm.get('termLimits').value,
      "Business Sector": this.clientContactForm.get('BusinessSector').value,
      "Client Location Details":
      {
        "Address Line 1": this.clientContactForm.get('line1').value,
        "Address Line 2": this.clientContactForm.get('line2').value,
        "City": this.clientContactForm.get('city').value,
        "State": this.clientContactForm.get('state').value,
        "Zip Code": this.clientContactForm.get('zipCode').value,
        "Country": this.clientContactForm.get('country').value,
      },
      "Contact Full Name": this.clientContactForm.get('personFirstName').value,
      "Contact Title": this.clientContactForm.get('clientName').value,
      "Contact Work Phone": this.clientContactForm.get('contactNumber').value,
      "Contract Cell Phone": this.clientContactForm.get('contractCellPhone').value,
      "Department": this.clientContactForm.get('designation').value,
      "Contract Email": this.clientContactForm.get('emailId').value,
      "Reporting Manager Name": ""
    }
    this.httpService.clientCreation("cr",obj).subscribe((result) => {
		
			//this.employeeModal.show();
		});
  }
}
