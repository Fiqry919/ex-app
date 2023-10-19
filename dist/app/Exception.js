"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatus = exports.Exception = void 0;
const HttpStatus_1 = require("./interfaces/HttpStatus");
Object.defineProperty(exports, "HttpStatus", { enumerable: true, get: function () { return HttpStatus_1.HttpStatus; } });
/**
 * Exception error
 */
exports.Exception = function (message, code, status) {
    this.status = status || false;
    this.code = code || HttpStatus_1.HttpStatus.SERVER_ERROR;
    this.message = message;
};
/**
 * Automatic trace when development
 */
const StackTrace = process.env.NODE_ENV === 'development';
/**
 * Parse unknown error to Exception.
 * when `NODE_ENV=development` show message with error stack
 * @returns Exception
 */
exports.Exception.parse = (e, trace = StackTrace) => e instanceof exports.Exception ? e : new exports.Exception(trace ? e.stack : e.message, HttpStatus_1.HttpStatus.SERVER_ERROR);
