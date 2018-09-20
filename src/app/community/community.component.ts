import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
	hideModal : boolean = true;
	comment : string;
  	constructor() { }

  	ngOnInit() {
  }

  newMessage(){
  	this.hideModal = !this.hideModal;
  	return '<app-board-component> </app-board-component>'
  }

  // submitComment(comment: any){
  // 	console.log(comment.target.value);
  // }

}
