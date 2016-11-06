import {Injectable} from '@angular/core';

export class User {
    constructor(public name: string,
                public isAuthorized = false) {
    }
}

// Todo: get the user; don't 'new' it.
let alice = new User('Alice', true);
let bob = new User('Bob', false);

@Injectable()
export class UserService {
    user = bob;  // initial user is Bob

    // swap users
    getNewUser() {
        return this.user = this.user === bob ? alice : bob;
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */