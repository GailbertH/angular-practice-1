import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name:string = 'Angular';

  constructor() {
      console.log("Hello!");
      this.changeName('Gailbert');
  }

  changeName(name:string):void
  {
    this.name = name;
  }
}
