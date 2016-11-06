// Examples with car and engine variations
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var car_1 = require('./car');
///////// example 1 ////////////
function simpleCar() {
    // Simple car with 4 cylinders and Flintstone tires.
    var car = new car_1.Car(new car_1.Engine(), new car_1.Tires());
    car.description = 'Simple';
    return car;
}
exports.simpleCar = simpleCar;
///////// example 2 ////////////
var Engine2 = (function () {
    function Engine2(cylinders) {
        this.cylinders = cylinders;
    }
    return Engine2;
}());
function superCar() {
    // Super car with 12 cylinders and Flintstone tires.
    var bigCylinders = 12;
    var car = new car_1.Car(new Engine2(bigCylinders), new car_1.Tires());
    car.description = 'Super';
    return car;
}
exports.superCar = superCar;
/////////// example 3 //////////
var MockEngine = (function (_super) {
    __extends(MockEngine, _super);
    function MockEngine() {
        _super.apply(this, arguments);
        this.cylinders = 8;
    }
    return MockEngine;
}(car_1.Engine));
var MockTires = (function (_super) {
    __extends(MockTires, _super);
    function MockTires() {
        _super.apply(this, arguments);
        this.make = 'YokoGoodStone';
    }
    return MockTires;
}(car_1.Tires));
function testCar() {
    // Test car with 8 cylinders and YokoGoodStone tires.
    var car = new car_1.Car(new MockEngine(), new MockTires());
    car.description = 'Test';
    return car;
}
exports.testCar = testCar;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=car-creations.js.map