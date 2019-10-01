import { Component, OnInit } from '@angular/core';
import { RestApiService } from './service/rest-api.service';

import { Userdata } from './class/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listOfUserdatas = [];
  searchTerm: string;
  
  listOfUserDetail: Userdata[];
  title = 'demo';
  constructor(private rest: RestApiService) {
  }

  ngOnInit() {
    setInterval(() =>
      this.getData()
      , 3000);
  }

  getData() {    
    this.rest.getDataFromServer().subscribe(
      data => {        
        this.listOfUserdatas = data
      }
    )
  }

  getSingleEmployeeDetails(id) {    
    this.rest.getDataFromServer().subscribe(
      data => {        
        this.listOfUserDetail = data[id];
      }
    )
  }
}
