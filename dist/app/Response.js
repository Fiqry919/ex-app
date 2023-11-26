"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncoderJSON = exports.decode = exports.encode = exports.filter = exports.parse = void 0;
const App_1 = require("./App");
const Response_1 = require("./interfaces/Response");
/**
 * parse format response
 */
const parse = (data) => (0, Response_1.Encode)(data) ? Object.assign(Object.assign({}, Response_1.DefaultEncode), data) : data;
exports.parse = parse;
/**
 * filtering request
 */
const filter = (request) => Object.keys(request.body).length ? request.body : request.query;
exports.filter = filter;
/**
 * response encoder
 */
const encode = (object, _encryption = true) => (0, App_1.env)("APP_ENCRYPTION") === 'true' && _encryption ? { data: (0, App_1.encrypt)((0, exports.parse)(object)) } : (0, exports.parse)(object);
exports.encode = encode;
/**
 * response decoder.
 * auto detect encryption.
 */
const decode = (object, _encryption = true) => (0, App_1.env)("APP_ENCRYPTION") === 'true' && _encryption && ((0, App_1.env)("END_TO_END") === "true" ? true : object.data)
    ? (0, App_1.decrypt)(object.data)
    : object;
exports.decode = decode;
/**
 * custom response json encoder
 */
class EncoderJSON {
    constructor(defaultFormat, options) {
        this.defaultFormat = defaultFormat;
        this.options = options;
        this.parse = (object) => {
            for (const [k, v] of Object.entries(this.defaultFormat)) {
                if (typeof v === 'object' && !Array.isArray(v))
                    object[k] = Object.assign(Object.assign({}, v), object[k]);
            }
            return Object.assign(Object.assign({}, this.defaultFormat), object);
        };
        this.encode = (object, encryption = true) => {
            var _a;
            return (0, App_1.env)("APP_ENCRYPTION") === 'true' && encryption
                ? { data: ((_a = this.options) === null || _a === void 0 ? void 0 : _a.encrypt) ? this.options.encrypt(this.parse(object)) : (0, App_1.encrypt)(this.parse(object)) }
                : this.parse(object);
        };
        this.decode = (object, encryption = true) => {
            var _a;
            return (0, App_1.env)("APP_ENCRYPTION") === 'true' && encryption && ((0, App_1.env)("END_TO_END") === "true" ? true : object.data)
                ? (((_a = this.options) === null || _a === void 0 ? void 0 : _a.decrypt) ? this.options.decrypt(object.data) : (0, App_1.decrypt)(object.data))
                : object;
        };
    }
}
exports.EncoderJSON = EncoderJSON;
