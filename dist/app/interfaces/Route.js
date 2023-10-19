"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteDuplicate = exports.RouteFilter = exports.RouterOptions = void 0;
const express_1 = require("express");
/**
 * express router
 */
exports.RouterOptions = express_1.Router;
/**
 * Route filter
 */
exports.RouteFilter = [];
/**
 * Duplicate route
 */
const RouteDuplicate = (identity) => { throw new Error(`Duplicate route: ${identity}`); };
exports.RouteDuplicate = RouteDuplicate;
