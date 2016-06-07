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
var router_deprecated_1 = require('@angular/router-deprecated');
var order_service_1 = require('./services/order.service');
var SearchComponent = (function () {
    function SearchComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.goToCustomer = function () {
        if (!this.orderId) {
            alert('enter order id');
        }
        else {
            var link = ['OrderDetail', { id: this.orderId }];
            this.router.navigate(link);
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'order-search',
            templateUrl: 'app/search.component.html',
            styleUrls: ['app/search.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, router_deprecated_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map