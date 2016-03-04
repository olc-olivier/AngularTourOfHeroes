/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {HeroListComponent} from './hero-list.component';
import {HeroService}       from './hero.service';
import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {HeroData}          from './hero-data';
import {provide} from "angular2/core";
import {XHRBackend} from "angular2/http";
@Component({
    selector: 'my-toh',
    template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
    directives:[HeroListComponent],
    providers: [
        HTTP_PROVIDERS,
        HeroService,
        provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
        provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
    ]
})
export class TohComponent { }
