/**
 * Created by o.chantereau on 03.03.2016.
 */
import {Component, OnInit} from 'angular2/core';
import {HeroService}       from './hero.service';
import {Hero} from "./heroes/hero";
@Component({
    selector: 'hero-list',
    template: `
  <h3>Heroes:</h3>
  <ul>
    <li *ngFor="#hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
  New Hero:
  <input #newHero />
  <button (click)="addHero(newHero.value); newHero.value=''">
    Add Hero
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
    styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {
    constructor(private _heroService:HeroService) {
    }

    errorMessage:string;
    heroes:Hero[];

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error);
    }

    addHero(name:string) {
        if (!name) {
            return;
        }
        this._heroService.addHero(name)
            .subscribe(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error);
    }
}
