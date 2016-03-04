/**
 * Created by o.chantereau on 01.03.2016.
 */
import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/Rx';
import {TohComponent} from "./toh.component";


bootstrap(TohComponent, [
    ROUTER_PROVIDERS
]);
