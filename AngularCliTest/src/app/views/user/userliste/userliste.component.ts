import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userliste',
  templateUrl: './userliste.component.html',
  styleUrls: ['./userliste.component.css']
})
export class UserlisteComponent implements OnInit {
     title = 'USER';
  
    public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
    
    public value = ['Basketball', 'Cricket']
  
    onButtonClick() : void {
      this.title = "Button Clicked";
    }

  constructor() { }

  ngOnInit() {
  }

}
