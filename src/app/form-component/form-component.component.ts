import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  userName: string = '';
  pTagStyle: object = { 'color': 'blue ' };
  vehicles: Array<string> = ["bike", 'car', 'cycle', 'jeep'];
  arrayOfVechicles: Array<any> = [{ 'id': 1, 'name': 'bike' },
  { 'id': 2, 'name': 'car' },
  { 'id': 3, 'name': 'jeep' }];
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onbtnclick(): void {
    this.userName = "";
    console.log(this.arrayOfVechicles[0]['id']);
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }

}
