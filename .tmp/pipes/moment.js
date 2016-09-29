import { Injectable, Pipe } from '@angular/core';
export var Moment = (function () {
    function Moment() {
    }
    Moment.prototype.transform = function (value) {
        return this.durationFromMsHelper(value);
    };
    Moment.prototype.pad2 = function (num) {
        if (num <= 99) {
            num = ('0' + num).slice(-2);
        }
        return num;
    };
    // Now the actual helper to turn ms to [hh:]mm:ss
    Moment.prototype.durationFromMsHelper = function (ms) {
        // if (typeof ms != 'number') {
        //   return '';
        // }
        var x = ms / 1000;
        var seconds = this.pad2(Math.floor(x % 60));
        x /= 60;
        var minutes = this.pad2(Math.floor(x % 60));
        x /= 60;
        var hours = Math.floor(x % 24);
        var newHours = hours ? this.pad2(hours) + ':' : '';
        return newHours + minutes + ':' + seconds;
    };
    Moment.decorators = [
        { type: Pipe, args: [{
                    name: 'moment'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    Moment.ctorParameters = [];
    return Moment;
}());
