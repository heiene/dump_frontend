import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { OrderService } from './services/order.service';
import { OrderComponent } from './order.component';
import { CustomerComponent } from './customer.component';

@Component({
    selector: 'order-app',
    template:  `
    <div class="navbar">
    <img src="/img/bn_logo.png" alt="" class="pull-right" style="height: 50px; margin: 20px;"/>
        <h1 class="navbar-inner">{{title}}</h1>
    </div>
                <router-outlet></router-outlet>
                  `,
    styleUrls: ['./app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [OrderService,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/order/:id', name: 'OrderDetail', component: OrderComponent},
    {path: '/customer/:id', name: 'CustomerDetail', component: CustomerComponent}
])
export class AppComponent {
    title = 'Sporingsapp';
}