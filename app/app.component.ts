import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { OrderService } from './services/order.service';
import { OrderComponent } from './order.component';
import { CustomerComponent } from './customer.component';
import { SearchComponent } from './search.component';

@Component({
    selector: 'order-app',
    template:  `
    <div class="navbar">
    <img src="/img/bn_logo.png" alt="" class="pull-right" style="height: 50px; margin: 20px;"/>
        <h1 class="navbar-inner">{{title}}</h1>
    </div>
                <router-outlet></router-outlet>
                <nav class="navbar navbar-default navbar-fixed-bottom">
                <div id="footer">Information Updated: {{information}}</div>
                </nav>
                  `,
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [OrderService,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/', name: 'SearchOrder', component: SearchComponent},
    {path: '/order/:id', name: 'OrderDetail', component: OrderComponent},
    {path: '/customer/:id', name: 'CustomerDetail', component: CustomerComponent}
])
export class AppComponent implements OnInit {
    title = 'Ordre Sporing';
    information = 'null';

    constructor(private orderService:   OrderService) {}


    ngOnInit() {

        this.orderService.getLastUpdate().subscribe(
                data => {
                this.information = data.json().last_update_timestamp;
                console.log("data", this.information)
            },
                err => console.error(err),
            () => {
                console.log('get lastupdate complete', JSON.stringify(this.information));
            }
        );

    }
}