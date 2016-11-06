import { Injectable } from '@angular/core';

export class Engine {
  public cylinders = 4;
}

export class Tires {
  public make  = 'Flintstone';
  public model = 'Square';
}

@Injectable()
export class Car {
  public description = 'DI';

  constructor(public engine: Engine, public tires: Tires) { }

  // Method using the engine and tires
  drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/