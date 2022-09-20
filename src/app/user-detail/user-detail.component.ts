import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
  @Input() user:any;  

  @Input() userIndex: number = 0 ;

  @Output() removeUserEvent = new EventEmitter();

  ngOnInit(): void {
  }

  removeUser() {
    console.log(this.userIndex);
    this.removeUserEvent.emit(this.userIndex);
  }

}
