import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../comment.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
	hideModal : boolean = true;
  // username : string;
  // message:string;
  date:any;
  userMessage : any;
  comment_Array: any;
  closeResult: string;

  constructor(private modalService: NgbModal) { 
      this.userMessage = {};
      this.comment_Array = [
       new Comment('Bobby Barkly', 'WOW WOW WOW', '10/12/2018'),
       new Comment('Ryan Hanlon', 'Hey have you had the new coco puff cereal lately?', '10/21/2018')
      ];
    }

  ngOnInit() {}

  newMessage(){
    console.log("USERMESSAGE" , this.userMessage)
    this.date = this.dateToString(this.userMessage.date)
  	this.comment_Array.push(new Comment(this.userMessage.username, this.userMessage.message, this.userMessage.date))
    this.userMessage = {};
  }

  open(content) {
    this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private dateToString(date:Array<string>){
    let dateString = date["month"] + '/' + date["day"] + '/' + date["year"];
    console.log("DATE", dateString)
    return dateString
  }

  // submitComment(comment: any){
  // 	console.log(comment.target.value);
  // }

}
