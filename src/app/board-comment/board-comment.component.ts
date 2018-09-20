import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-comment',
  template: `
  	<div>
  		<label>{{user}}:</label>
		<p>"{{commentInput}}"</p>
  		<div class="form-border"> </div>
  	</div>
  `,
  styleUrls: ['./board-comment.component.css']
})
export class BoardCommentComponent implements OnInit {
	// username = '';
	// comment = '';
	@Input() user: string; 
	@Input() commentInput: string; 
  constructor() { }

  ngOnInit() {
  }

}
