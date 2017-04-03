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
var elastic_service_1 = require("../services/elastic.service");
var EsviewComponent = (function () {
    //es: ElasticService;
    function EsviewComponent(es) {
        this.es = es;
        this.indexname = 'historyindex';
        this.indextype = 'hotels';
        this.url = '127.0.0.1:9200';
    }
    EsviewComponent.prototype.getStatus = function () {
        console.log('Get status for index = ' + this.url);
        // this.es.connect(this.url);
        this.es.getStatus(this.url, this.indexname + '/' + this.indextype).subscribe(function (posts) {
            console.log('got results' + posts);
        });
    };
    EsviewComponent.prototype.getIndices = function () {
        var _this = this;
        this.es.getIndices(this.url).subscribe(function (posts) {
            console.log('got results' + posts.split('\n'));
            _this.results = posts.split('\n');
        });
    };
    return EsviewComponent;
}());
EsviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'esview',
        templateUrl: 'esview.component.html',
        providers: [elastic_service_1.ElasticService]
    }),
    __metadata("design:paramtypes", [elastic_service_1.ElasticService])
], EsviewComponent);
exports.EsviewComponent = EsviewComponent;
//# sourceMappingURL=esview.component.js.map