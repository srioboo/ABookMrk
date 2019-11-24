import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ABookMrk';

  ngOnInit(): void {
    $(document).ready(() => {
      console.log('jQuery esta funcionando');
      // $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
    });
  }

}
