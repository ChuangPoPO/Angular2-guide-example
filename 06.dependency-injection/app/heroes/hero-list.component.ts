/* tslint:disable:one-line */
import { Component }   from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
    ({{hero.isSecret ? 'secret' : 'public'}})
  </div>
  `,
})
export class HeroListComponent {
  heroes: Hero[];

  constructor(heroService: HeroService)
  {
    this.heroes = heroService.getHeroes();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/