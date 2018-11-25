import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./school.component.css']
})
export class ContactComponent implements OnInit {
  private name:any;
  private email:any;
  private interest:any;
  private faculty:any;
  private message:any;
  constructor() { }

  ngOnInit() {
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
//   configUrl = 'assets/config.json';

//   getConfig() {
//     return this.http.get(this.configUrl);
//   }
// }

