"use strict";
var car_1 = require('./car');
// BAD pattern!
var CarFactory = (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createCar = function () {
        var car = new car_1.Car(this.createEngine(), this.createTires());
        car.description = 'Factory';
        return car;
    };
    CarFactory.prototype.createEngine = function () {
        return new car_1.Engine();
    };
    CarFactory.prototype.createTires = function () {
        return new car_1.Tires();
    };
    return CarFactory;
}());
exports.CarFactory = CarFactory;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=car-factory.js.map