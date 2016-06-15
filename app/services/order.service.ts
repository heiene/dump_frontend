import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

    private environment = {
        dev:{
            baseUrl: 'http://localhost:8081/',
        },
        test: {
            baseUrl: 'http://default-environment.8iwrt3nvuq.eu-west-1.elasticbeanstalk.com/'
        },
        prod: {

        }
    };

  //  private port;
    private baseUrl     = this.environment.test.baseUrl; //change this to test for AWS
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