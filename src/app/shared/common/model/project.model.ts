export class projectCreation {
    public projectName:string;
    public projectType:any;
    public startDate:Date;
    public projectManagerContactNumber:any;
    public  baseURL:string;
    public basePort:any;
    public organization: organization
    public  projectManager:projectManager
    public client:client
    public endDate:Date;
    public projectId:String
    constructor()
    {
        this.organization = new organization();
        this.client = new client();
        this.projectManager = new projectManager();
    }
}
export class organization {
    public organizationId: any;
}
export class projectManager {
    public employeeId: String;
}
export class client {
    public clientId: String;
}