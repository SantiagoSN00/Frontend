import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  url_api:string = "https://reqres.in/api/";
  login(user: any): Observable<any> {
    console.log(this.url_api+'login');
    return this.http.post(this.url_api+"login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post(this.url_api+"register", user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}