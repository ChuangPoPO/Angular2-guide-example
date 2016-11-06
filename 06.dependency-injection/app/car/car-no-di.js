"use strict";
// Car without DI
var car_1 = require('./car');
var Car = (function () {
    function Car() {
        this.description = 'No DI';
        this.engine = new car_1.Engine();
        this.tires = new car_1.Tires();
    }
    // Method using the engine and tires
    Car.prototype.drive = function () {
        return (this.description + " car with ") +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car;
}());
exports.Car = Car;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=car-no-di.js.map