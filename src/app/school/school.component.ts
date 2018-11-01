import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm  } from '@angular/forms';

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
