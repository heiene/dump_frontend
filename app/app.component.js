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
var order_component_1 = require('./order.component');
var customer_component_1 = require('./customer.component');
var AppComponent = (function () {
    function AppComponent(orderService) {
        this.orderService = orderService;
        this.title = 'Ordre Sporing';
        this.information = 'null';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getLastUpdate().subscribe(function (data) {
            _this.information = data._body;
            console.log("data", _this.information);
        }, function (err) { return console.error(err); }, function () {
            console.log('get lastupdate complete', JSON.stringify(_this.information));
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'order-app',
            template: "\n    <div class=\"navbar\">\n    <img src=\"/img/bn_logo.png\" alt=\"\" class=\"pull-right\" style=\"height: 50px; margin: 20px;\"/>\n        <h1 class=\"navbar-inner\">{{title}}</h1>\n    </div>\n                <router-outlet></router-outlet>\n                <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n                <div id=\"footer\">Information Updated: {{information}}</div>\n                </nav>\n                  ",
            styleUrls: ['./app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [order_service_1.OrderService,
                router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/order/:id', name: 'OrderDetail', component: order_component_1.OrderComponent },
            { path: '/customer/:id', name: 'CustomerDetail', component: customer_component_1.CustomerComponent }
        ]), 
        __metadata('design:paramtypes', [order_service_1.OrderService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map