"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// declare module 'typeorm' {
//     interface Repository<Entity> {
//         exclude: (...fields: (keyof Entity)[]) => Repository<Entity>
//     }
// }
/**
     * Global define
     */
Object.defineProperty(Date.prototype, 'format', {
    value: function (format = 'yyyy-MM-dd HH:mm:ss') {
        const year = this.getFullYear().toString();
        const month = (this.getMonth() + 1).toString().padStart(2, '0');
        const day = this.getDate().toString().padStart(2, '0');
        const hour = this.getHours().toString().padStart(2, '0');
        const minute = this.getMinutes().toString().padStart(2, '0');
        const second = this.getSeconds().toString().padStart(2, '0');
        return format.replace('yyyy', year).replace('MM', month).replace('dd', day)
            .replace('HH', hour).replace('mm', minute).replace('ss', second);
    },
    writable: true, enumerable: false, configurable: true,
});
Date.prototype.add = function (value, unit) {
    switch (unit) {
        case 'seconds':
            this.setSeconds(this.getSeconds() + value);
            break;
        case 'minutes':
            this.setMinutes(this.getMinutes() + value);
            break;
        case 'hours':
            this.setHours(this.getHours() + value);
            break;
        case 'days':
            this.setDate(this.getDate() + value);
            break;
        case 'months':
            this.setMonth(this.getMonth() + value);
            break;
        case 'years':
            this.setFullYear(this.getFullYear() + value);
            break;
        default:
            break;
    }
    return this;
};
String.prototype.capitalize = function () { return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase(); };
Array.prototype.ObjectFilter = function (filter) {
    return this.map((item) => {
        if (typeof item === 'object' && item !== null) {
            const copy = Object.assign({}, item);
            for (const field of filter)
                delete copy[field];
            return copy;
        }
        else
            return item;
    });
};
/**
 * Express define
 */
express_1.request.data = function () { return Object.keys(this.body).length ? this.body : this.query; };
/**
 * Typeorm define
 */
// Repository.prototype.exclude = function <T>(this: T, ...fields: (keyof T)[]): T {
//     fields.forEach((field) => delete this[field]);
//     return this;
// }
