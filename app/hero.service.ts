/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Hero} from "./heroes/hero";

@Injectable()
export class HeroService {
    constructor (private http: Http) {}

    private _heroesUrl = 'app/heroes';  // URL to web api

    getHeroes () {
        return this.http.get(this._heroesUrl)
            .map(res => <Hero[]> res.json().data)
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
