import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

    private port        = 8081;
    private baseUrl     = 'http://localhost:'+this.port+'/';
    private orderUrl    = this.baseUrl + 'order/';
    private customerUrl = this.baseUrl + 'customer/';

    constructor(private http: Http) { }

    getOrder(id){
        return this.http.get(this.orderUrl+id)
    }

    getOrdersByCustomerId(id) {
        return this.http.get(this.customerUrl+id)
    }

    getLastUpdate() {
        return this.http.get(this.baseUrl)
    }
}