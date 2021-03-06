"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
// import { Client, SearchResponse } from "elasticsearch";
var http_1 = require("@angular/http");
var ElasticService = (function () {
    function ElasticService(http) {
        this.http = http;
        this.http = http;
        console.log('ElasticService Initialized...');
        console.log(this.http);
    }
    ElasticService.prototype.getStatus = function (host, indextype) {
        //let headers = new Headers({'Access-Control-Allow-Origin' : '*'});
        //let options     = new RequestOptions({ headers: headers });
        return this.http.get('http://' + host + '/' + '_cat/indices?v')
            .map(function (res) { return res.json(); });
    };
    ElasticService.prototype.getIndices = function (host) {
        return this.http.get('http://' + host + '/' + '_cat/indices?v')
            .map(function (res) { return res.text(); });
    };
    ElasticService.prototype.getDocuments = function (host, indextype) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://' + host + '/' + indextype + '/_search', { "query": {} }, options)
            .map(function (res) { return res.json(); });
    };
    return ElasticService;
}());
ElasticService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ElasticService);
exports.ElasticService = ElasticService;
//# sourceMappingURL=elastic.service.js.map