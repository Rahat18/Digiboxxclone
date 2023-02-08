import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()


export class AuthService{

   // private _loginUrl = "http://localhost:4200/"
constructor(private http: HttpClient){};


loginUser(user: any){
    //return this.http.post<any>(this._loginUrl , user)
    const a ={
        email : 'abc@xyz.com',
        password : 'abc123'
    }

    if(user.email=== a.email && user.password === a.password){
    return true;}

    else {return false}
}
}