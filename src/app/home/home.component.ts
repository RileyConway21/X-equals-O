import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
birthday = new Date(2006,3,15)
  constructor() { }

  ngOnInit(): void {
  }

}
