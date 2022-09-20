import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {

  listInput:string = "";
  tasksList:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  sendInput() {
    console.log(this.listInput);
    this.tasksList.push(this.listInput);
  }
}
