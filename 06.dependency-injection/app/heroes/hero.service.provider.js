"use strict";
/* tslint:disable:one-line */
var hero_service_1 = require('./hero.service');
var logger_service_1 = require('../logger.service');
var user_service_1 = require('../user.service');
var heroServiceFactory = function (logger, userService) {
    return new hero_service_1.HeroService(logger, userService.user.isAuthorized);
};
exports.heroServiceProvider = { provide: hero_service_1.HeroService,
    useFactory: heroServiceFactory,
    deps: [logger_service_1.Logger, user_service_1.UserService]
};
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.service.provider.js.map