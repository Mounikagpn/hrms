export class clientCreationModel {
    clientName: String;
    personFirstName: String;
    personLastName: String;
    emailId: String;
    contactNumber: number;
    designation: String;
    addresses: addressIdModel[];
    pointOfContact :pointOfContactModel[];
    clientContacts:clientContactsIdModel[];
    public organization :organization;
    clientId:string;
    status:string;
    
    // addressObjs: address[];
    constructor() {
        this.addresses = [];
        this.pointOfContact=[]
        //  this.addressObjs = [];
        this.organization=new organization();
        this.clientContacts=[];
    }

}

export class addressIdModel {
    line1: String;
    line2: String;
    city: String;
    state: String;
    country: String;
    landmark: String;
    zipCode: String;

}
export class pointOfContactModel {
    employeeId:String;
}
export class organization {
    organizationId: String;
}
export class clientContactsIdModel {
    clientCoOrdinatorEmailId: String;
    clientCoOrdinatorPhoneNo: String;
    coOrdinatorFirstName: String;
    coOrdinatorLastName: String;
   

}