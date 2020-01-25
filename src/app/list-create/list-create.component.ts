import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {
  @Output() postCreated = new EventEmitter();
  enteredTitle = "";
  enteredContent = "";
  newPost="No Content";

  onAddPost(){
      const post = {title: this.enteredTitle, content: this.enteredContent};
      console.log(post);
      this.postCreated.emit(post);//emiting our own event....
  }
  constructor() { }

  ngOnInit() {
  }

}
