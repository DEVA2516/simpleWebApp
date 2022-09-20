import { Component, OnInit } from '@angular/core';

interface user {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  profileUrl: string,
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  usersList: Array<user> = [];

  constructor() { }

  ngOnInit(): void {

    this.usersList = [{
      'id': 4,
      'firstName': 'stalin',
      'lastName': 'innacci',
      'email': 'stalin1998@gmail.com',
      'profileUrl': 'https://pbs.twimg.com/profile_images/976710573562806272/mQ04tfbd_400x400.jpg'

    }, {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "firstName": "Michael",
      "lastName": "Lawson",
      "profileUrl": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "firstName": "Lindsay",
      "lastName": "Ferguson",
      "profileUrl": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "firstName": "Tobias",
      "lastName": "Funke",
      "profileUrl": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "firstName": "Byron",
      "lastName": "Fields",
      "profileUrl": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "firstName": "George",
      "lastName": "Edwards",
      "profileUrl": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "firstName": "Rachel",
      "lastName": "Howell",
      "profileUrl": "https://reqres.in/img/faces/12-image.jpg"
    }]
  }

  removedUser(index:number){
    console.log(index)
    this.usersList.splice(index,1);
  }


}
