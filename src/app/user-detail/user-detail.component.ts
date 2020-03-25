import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";
import { IUserDetail } from "./user-detail";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user_id : any;     
  userDetail : IUserDetail;                                        
  constructor(private route: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.user_id = this.route.snapshot.params.id;
    this.ApiService.userDetail(this.user_id).subscribe((ret: any)=>{

      this.userDetail = {
        email: ret.data['email'],
        firstName: ret.data['first_name'],
        lastName: ret.data['last_name'],
        image: ret.data['avatar'],
        company: ret.ad['company'],
        description: ret.ad['text']
      }
      console.log(ret);
    });
  }

}
