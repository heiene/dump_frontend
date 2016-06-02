import { Component, OnInit }    from '@angular/core';
import { RouteParams, Router }          from '@angular/router-deprecated';
import { OrderService }         from './services/order.service';

@Component({
    selector: 'customer-detail',
    templateUrl: 'app/customer.component.html',
    styleUrls: ['app/customer.component.css']

})
export class CustomerComponent implements OnInit {

    customerData;
    error:boolean = false;

    constructor(private orderService:   OrderService,
                private routeParams:    RouteParams,
                private router:         Router) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {

            let id = this.routeParams.get('id');
            console.log("getting orders for customer:", id);

            this.orderService.getOrdersByCustomerId(id).subscribe(
                    data => {
                        if(data.json().length>0) {
                            this.error = false;
                            this.customerData = data.json();
                            console.log("lengde", this.customerData.length);
                            console.log("data", this.customerData)
                        } else {
                            console.log("Error in getting customer");
                            this.error = true;
                        }
                },
                    err => console.error(err),
                () => {
                    console.log('get customer details completed', JSON.stringify(this.customerData[0]));
                }
            );

        } else {
            console.log('something wrong in customerGettings');
        }
    }

    gotoOrderDetail(order_ref){
        let link = ['OrderDetail', { id: order_ref }];
        this.router.navigate(link);
    }
}