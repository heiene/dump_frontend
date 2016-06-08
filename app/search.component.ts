import { Component }    from '@angular/core';
import {  Router }  from '@angular/router-deprecated';

@Component({
    selector: 'order-search',
    templateUrl: 'app/search.component.html',
    styleUrls: ['app/search.component.css']

})
export class SearchComponent{

    orderId: number;
    
    constructor(private router: Router) {
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