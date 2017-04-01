import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'esview',
  templateUrl: 'esview.component.html'
})

export class EsviewComponent {
  indexname: string;
  indextype: string;
  url: string;

  constructor() {
    this.indexname = 'historyindex';
    this.indextype = 'hotels';
    this.url = '127.0.0.1:9300/' + this.indexname + '/' + 'this.indextype'
  }

  getStatus() {
    console.log('Get status for index = ' + this.indexname)
  }
}
