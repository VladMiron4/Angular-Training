import { HttpClient } from "@angular/common/http";
import { LoginCustomer } from "../modules/shared/types/users.types/users.login";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateCustomer } from "../modules/shared/types/users.types/users.create";
import {JwtHelperService} from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    constructor(private http:HttpClient,public jwtHelper: JwtHelperService){}
    getToken(){
        localStorage.getItem("token");
    }

    login(customer:LoginCustomer):Observable<string> {
        return this.http.post<string>(`${environment.apiUrl}/auth/login`,customer);
    }

    register(customer:CreateCustomer) : Observable<CreateCustomer>{
        return this.http.post<CreateCustomer>(`${environment.apiUrl}/auth/register`,customer);
    }


}
