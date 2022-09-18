import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  userName : string = '';
  btnDisabled:boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event:any){
    if(event.target.value != null){
      this.btnDisabled = false
    }
  }

  onbtnclick(){
    this.userName = "";  
    this.btnDisabled = true;  
  }

}
