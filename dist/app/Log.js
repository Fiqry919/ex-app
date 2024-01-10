"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const Log = (options) => {
    if (options) {
        return typeof options === 'boolean'
            ? (0, morgan_1.default)('combined')
            : (0, morgan_1.default)(options.format, options.options);
    }
};
exports.default = Log;
