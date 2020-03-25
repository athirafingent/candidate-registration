import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {

  regDetails= {};
  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.DataService.currentData.subscribe(
      data => {
        this.regDetails = data; 
        console.log(this.regDetails)
      }
    );
  }

}
