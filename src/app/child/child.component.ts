import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  constructor() { }

  @Input() user:any;

  newUser = '';

  ngOnInit(): void {
    console.log("this user",this.user);
    
  }

  @Output() addNewUser = new EventEmitter();

  ngOnChanges(){
    console.log("update user",this.user);
  }
  
  addUser(){
    this.addNewUser.emit(this.newUser)
  }
}
