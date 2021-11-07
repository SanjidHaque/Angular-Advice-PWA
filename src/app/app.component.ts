import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  advice ='';

  constructor(private dataService: DataService,
              updates: SwUpdate) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.dataService.getAdvice().subscribe(response => {
        this.advice = response.slip.advice;
      });
  }
}
