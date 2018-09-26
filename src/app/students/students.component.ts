import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
 //  template: `
 //  	<div class="container">
	// 	<div class="row">
	// 	<app-card-view [(imageSrc)]="src/includes/img/Hizashi.jpg" [(header)]="Test123" [(comment)]="hello"></app-card-view>
	// 	</div>
	// </div>
 //  `,
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	elementSelected:string;
  constructor() {}
  ngOnInit() {}

  showElement(element:any){
  	console.log(element)
  	this.elementSelected = element == this.elementSelected ? 'close' : element;
  }

  checkSelected(element:any){
  	return this.elementSelected == element ? true: false;
  }

}
