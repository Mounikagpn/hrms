import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class GlobalValues {
    public leaveData: LeaveDetails;
    public userData:UserePrivileges;
    public keyPress(event: any) {
        const pattern = /[0-9\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    public keyPresss(event: any) {
        const pattern = /[a-z\A-Z\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    public numberPress(event: any) {
        const pattern = /[0-8\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
 }
 public numberPresswithDot(event: any) {
    const pattern = /[0-9\.\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
    }
}
    public idCardNumber(event: any) {
        const pattern = /[a-z\A-Z\0-9\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
        // const pattern = /[0-9\+\-\:\.\,\ ]/;


    }
    public notAllowSpace(event: any) {
        const pattern = /^[a-zA-Z0-9_ ]*$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
        // const pattern = /[0-9\+\-\:\.\,\ ]/;


    }
    public urlChecking(event: any) {
        const pattern = /^[a-zA-Z0-9_ ]*$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
        // const pattern = /[0-9\+\-\:\.\,\ ]/;


    }

}
export class LeaveDetails {
    LeaveType: String
    LeaveBalance: String;
    LeaveId: String;
}
export class UserePrivileges
{
    Privileges : any;
}