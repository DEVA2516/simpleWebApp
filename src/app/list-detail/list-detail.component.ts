import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  @Input() liInput ='';
  isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }
  isClkChecked():void{
   this.isChecked = !this.isChecked;
  }
}
