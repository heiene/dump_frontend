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
var CustomerComponent = (function () {
    function CustomerComponent(orderService, routeParams, router) {
        this.orderService = orderService;
        this.routeParams = routeParams;
        this.router = router;
        this.error = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = this.routeParams.get('id');
            console.log("getting orders for customer:", id);
            this.orderService.getOrdersByCustomerId(id).subscribe(function (data) {
                if (data.json().length > 0) {
                    _this.error = false;
                    _this.customerData = data.json();
                    console.log("lengde", _this.customerData.length);
                    console.log("data", _this.customerData);
                }
                else {
                    console.log("Error in getting customer");
                    _this.error = true;
                }
            }, function (err) { return console.error(err); }, function () {
                console.log('get customer details completed', JSON.stringify(_this.customerData[0]));
            });
        }
        else {
            console.log('something wrong in customerGettings');
        }
    };
    CustomerComponent.prototype.gotoOrderDetail = function (order_ref) {
        var link = ['OrderDetail', { id: order_ref }];
        this.router.navigate(link);
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer-detail',
            templateUrl: 'app/customer.component.html',
            styleUrls: ['app/customer.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map