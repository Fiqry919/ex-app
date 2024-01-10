"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./interfaces/App");
const Exception_1 = require("./Exception");
const Timeout = (options) => {
    const ttl = (typeof options === 'number') ? options
        : typeof options === 'object'
            ? options.time
            : App_1.AppConfig.timeout;
    return (_, response, next) => {
        response.setTimeout(ttl, () => {
            if (typeof options === 'object' && 'callback' in options) {
                return options.callback(response);
            }
            else {
                return response.sendStatus(Exception_1.HttpStatus.TIMEOUT);
            }
        });
        next();
    };
};
exports.default = Timeout;
