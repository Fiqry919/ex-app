"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const privy_validator_1 = __importDefault(require("privy-validator"));
const Exception_1 = require("./Exception");
const Response_1 = require("./Response");
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
 * validate request body or query (priority query)
 */
express_1.request.validate = function (schema, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const validator = yield privy_validator_1.default.make((0, Response_1.decode)(this.data()), schema, message);
        if (!validator.validate()) {
            throw new Exception_1.Exception(validator.errors(), Exception_1.HttpStatus.BAD_REQUEST);
        }
    });
};
/**
 * Typeorm define
 */
// Repository.prototype.exclude = function <T>(this: T, ...fields: (keyof T)[]): T {
//     fields.forEach((field) => delete this[field]);
//     return this;
// }
