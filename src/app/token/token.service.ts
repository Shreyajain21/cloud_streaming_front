import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class TokenService{
    public getToken():string{
        let stri = localStorage.getItem("login_details");
        let obj = JSON.parse(stri);
        return obj.token;
    };
};