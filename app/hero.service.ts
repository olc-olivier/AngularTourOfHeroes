/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Hero} from "./heroes/hero";
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class HeroService {

    private _heroesUrl:string = 'app/heroes';

    constructor(private http:Http) {
    }

    getHeroes () {
        return this.http.get(this._heroesUrl)
            .map(res => <Hero[]> res.json().data)
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }
    addHero (name: string) : Observable<Hero>  {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .map(res =>  <Hero> res.json().data)
            .catch(this.handleError)
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
