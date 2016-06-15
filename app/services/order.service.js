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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.environment = {
            dev: {
                baseUrl: 'http://localhost:8081/',
            },
            test: {
                baseUrl: 'http://default-environment.8iwrt3nvuq.eu-west-1.elasticbeanstalk.com/'
            },
            prod: {}
        };
        //  private port;
        this.baseUrl = this.environment.test.baseUrl; //change this to test for AWS
        this.orderUrl = this.baseUrl + 'order/';
        this.customerUrl = this.baseUrl + 'customer/';
    }
    OrderService.prototype.getOrder = function (id) {
        return this.http.get(this.orderUrl + id);
    };
    OrderService.prototype.getOrdersByCustomerId = function (id) {
        return this.http.get(this.customerUrl + id);
    };
    OrderService.prototype.getLastUpdate = function () {
        return this.http.get(this.baseUrl);
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map