import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleWebApp';
  userData = {'userId':1,'userName':'abc'};
  users:any= ["user 1", "user 2"];

  constructor() { }

  changeItem() {
    this.userData = {'userId':2,'userName':'cdef'};
  }

  newUserEmitted(event:any){
    this.users.push(event)
    console.log(event);
  }
}
