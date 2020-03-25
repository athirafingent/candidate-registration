import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../services/api.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns : string[];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ApiService: ApiService) { }
  
  ngOnInit(): void {
    this.ApiService.userList().subscribe((retData: any) => {
      this.displayedColumns = ['id','name', 'email'];

      const ELEMENT_DATA: UserData[] = retData.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log("this.dataSource------------"+ this.dataSource);
    })
  }

}

