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
var OrderComponent = (function () {
    function OrderComponent(orderService, routeParams, router) {
        this.orderService = orderService;
        this.routeParams = routeParams;
        this.router = router;
        this.process1 = 'plan & design';
        this.process2 = 'validate & disp.';
        this.process3 = 'finalize access';
        this.process4 = 'complete order';
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = this.routeParams.get('id');
            console.log("getting order for:", id);
            this.orderService.getOrder(id).subscribe(function (data) {
                _this.order = data.json();
            }, function (err) { return console.error(err); }, function () {
                console.log('get order completed', _this.order);
            });
        }
        else {
            console.log('something wrong in ordergettingz');
        }
    };
    OrderComponent.prototype.goToCustomer = function (customer_id) {
        var link = ['CustomerDetail', { id: customer_id }];
        this.router.navigate(link);
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order-detail',
            templateUrl: 'app/order.component.html',
            styleUrls: ['app/order.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map