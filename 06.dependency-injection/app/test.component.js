/* tslint:disable */
// Simulate a simple test
// Reader should look to the testing chapter for the real thing
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_list_component_1 = require('./heroes/hero-list.component');
var TestComponent = (function () {
    function TestComponent() {
        this.results = runTests();
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'my-tests',
            template: "\n    <h2>Tests</h2>\n    <p id=\"tests\">Tests {{results.pass}}: {{results.message}}</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
/////////////////////////////////////
function runTests() {
    var expectedHeroes = [{ name: 'A' }, { name: 'B' }];
    var mockService = { getHeroes: function () { return expectedHeroes; } };
    it('should have heroes when HeroListComponent created', function () {
        var hlc = new hero_list_component_1.HeroListComponent(mockService);
        expect(hlc.heroes.length).toEqual(expectedHeroes.length);
    });
    return testResults;
}
//////////////////////////////////
// Fake Jasmine infrastructure
var testName;
var testResults;
function expect(actual) {
    return {
        toEqual: function (expected) {
            testResults = actual === expected ?
                { pass: 'passed', message: testName } :
                { pass: 'failed', message: testName + "; expected " + actual + " to equal " + expected + "." };
        }
    };
}
function it(label, test) {
    testName = label;
    test();
}
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=test.component.js.map