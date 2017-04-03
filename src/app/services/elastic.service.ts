import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
// import { Client, SearchResponse } from "elasticsearch";
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ElasticService {
    constructor(private http: Http) {
        this.http = http;
        console.log('ElasticService Initialized...');
         console.log(this.http);
    }

    getStatus(host: String, indextype: String){
    //let headers = new Headers({'Access-Control-Allow-Origin' : '*'});
//let options     = new RequestOptions({ headers: headers });
      return this.http.get('http://' + host + '/' + '_cat/indices?v')
      .map(res => res.json());
    }

    getIndices(host: String) {
    return this.http.get('http://' + host + '/' + '_cat/indices?v')
    .map(res => res.text());
    }
}
