import { Component, OnInit }    from '@angular/core';
import { RouteParams, Router }  from '@angular/router-deprecated';
import { OrderService }         from './services/order.service';

@Component({
    selector: 'order-search',
    templateUrl: 'app/search.component.html',
    styleUrls: ['app/search.component.css']

})
export class SearchComponent implements OnInit {

    orderId: number;
    
    constructor(private orderService:   OrderService,
                private router: Router) {
    }

    ngOnInit() {
       
    }

    goToCustomer() {
        if(!this.orderId) {
            alert('enter order id')
        } else {
            let link = ['OrderDetail', { id: this.orderId }];
            this.router.navigate(link);
        }
    }
}