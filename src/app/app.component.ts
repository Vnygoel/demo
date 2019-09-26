import { Component, OnInit } from '@angular/core';
import { RestApiService } from './service/rest-api.service';

import { Userdata } from './class/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listOfUserdata: Userdata[];
  searchTerm:string;
  listOfUserDetails: Userdata[];
  title = 'demo';
  constructor(private rest: RestApiService) {
  }

  ngOnInit() {
    setInterval(() =>
      this.getData()
      , 3000);
  }

  getData() {
    // debugger
    this.rest.getDataFromServer().subscribe(
      // data=>this.dataValue=data
      data => {
        this.listOfUserdata = data.hits;
      },
      error => {
      }
    )
  }

  getSingleEmployeeDetails(id: number) {
    // debugger
    this.rest.getDataFromServer().subscribe(    
      data => this.listOfUserDetails = data.hits[id] 
    //  data=> console.log(data[id])     
    )
  }

}
