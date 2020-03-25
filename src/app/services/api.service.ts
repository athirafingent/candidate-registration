import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public userList() {
    return this.httpClient.get("https://reqres.in/api/users?page=1");
  }

  public userDetail(user_id) {
    return this.httpClient.get("https://reqres.in/api/users/"+user_id);
  }
}
