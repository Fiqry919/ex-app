"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorJSON = exports.ErrorHandler = void 0;
const App_1 = require("./App");
const Exception_1 = require("./Exception");
const express_1 = require("express");
exports.ErrorHandler = (0, express_1.Router)().use('*', (0, App_1.error)(new Exception_1.Exception("Not Found", Exception_1.HttpStatus.NOT_FOUND)));
exports.ErrorJSON = (0, express_1.Router)().use('*', (_, res) => {
    const error = new Exception_1.Exception("Not Found", Exception_1.HttpStatus.NOT_FOUND);
    return res.status(error.code).json(error);
});
