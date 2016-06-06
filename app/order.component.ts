import { Component, OnInit }    from '@angular/core';
import { RouteParams, Router }  from '@angular/router-deprecated';
import { OrderService }         from './services/order.service';

@Component({
    selector: 'order-detail',
    templateUrl: 'app/order.component_alt.html',
    styleUrls: ['app/order.component.css']

})
export class OrderComponent implements OnInit {

    order;
    error: boolean = false;
    process1    = 'Validation';
    process2    = 'Planning';
    process3    = 'In Execution';
    process4    = 'Finalizing';
    process5    = 'Delivered';

    constructor(private orderService:   OrderService,
                private routeParams:    RouteParams,
                private router:         Router) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {

            let id = this.routeParams.get('id');
            console.log("getting order for:", id);

            this.orderService.getOrder(id).subscribe(
                    data => {
                        if(data.json().length>0) {
                            this.error = false;
                            this.order = data.json();
                        }
                        else {
                            console.log("No Orders returned");
                            this.error = true;
                        }

                },
                    err => console.error('ERROR:',err),
                () => {
                    console.log('get order completed', this.order);
                }
            );

        } else {
            console.log('something wrong in ordergettingz');
        }
    }

    goToCustomer(customer_id) {
        let link = ['CustomerDetail', { id: customer_id }];
        this.router.navigate(link);
    }
}