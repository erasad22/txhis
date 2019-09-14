import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'txhis';

  constructor( private appService: AppService ) { }

  ngOnInit() {
    // this.appService.getUsers().subscribe(users => {
    //   console.log('users :', users)
    // });
  }
}