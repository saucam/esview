import { Component } from '@angular/core';
import { ElasticService } from '../services/elastic.service';

@Component({
  moduleId: module.id,
  selector: 'esview',
  templateUrl: 'esview.component.html',
  providers: [ElasticService]
})

export class EsviewComponent {
  indexname: string;
  indextype: string;
  url: string;
  results: string[];
  // es: ElasticService;

  constructor(private es: ElasticService) {
    this.indexname = 'historyindex';
    this.indextype = 'hotels';
    this.url = '127.0.0.1:9200';
  }

  getStatus() {
    console.log('Get status for index = ' + this.url);
    // this.es.connect(this.url);
    this.es.getStatus(this.url, this.indexname + '/' + this.indextype).subscribe(posts => {
        console.log('got results' + posts)
    });
  }

  getIndices() {
  this.es.getIndices(this.url).subscribe(posts => {
      console.log('got results' + posts.split('\n'))
      this.results = posts.split('\n')
  });
  }

  getDocuments() {
  console.log('Get documents for index = ' + this.indexname);
  // this.es.connect(this.url);
  this.es.getDocuments(this.url, this.indexname + '/' + this.indextype).subscribe(posts => {
      console.log('got results' + posts.hits.hits)
      this.results = posts.hits.hits.map((item)=>JSON.stringify(item))
  });
  }
}
