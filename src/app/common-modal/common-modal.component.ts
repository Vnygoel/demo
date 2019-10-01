import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit() {
  }

}
