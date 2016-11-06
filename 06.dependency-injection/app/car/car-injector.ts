import { ReflectiveInjector } from '@angular/core';

import { Car, Engine, Tires } from './car';
import { Logger }             from '../logger.service';

export function useInjector() {
  let injector: ReflectiveInjector;
  /*
  // Cannot instantiate an ReflectiveInjector like this!
  let injector = new ReflectiveInjector([Car, Engine, Tires]);
  */
  injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
  let car = injector.get(Car);
  car.description = 'Injector';

  injector = ReflectiveInjector.resolveAndCreate([Logger]);
  let logger = injector.get(Logger);
  logger.log('Injector car.drive() said: ' + car.drive());
  return car;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/