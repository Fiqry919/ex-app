"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Hash {
    constructor() { }
}
/**
 * instance crypto when exported
 */
Hash.crypto = crypto_1.default;
/**
 * Make a hashed value
 * @returns string
 */
Hash.make = (input, saltLength = 16) => {
    const bytes = crypto_1.default.randomBytes(Math.ceil(saltLength / 2)).toString('hex').slice(0, saltLength);
    return bytes + crypto_1.default.createHash('sha256').update(input + bytes).digest('hex');
};
/**
 * Checking hashed value
 * @returns boolean
 */
Hash.check = (input, hash, saltLength = 16) => {
    return crypto_1.default.createHash('sha256').update(input + hash.slice(0, saltLength))
        .digest('hex') === hash.slice(saltLength);
};
/**
 * Make a HMAC value
 * @returns string
 */
Hash.makeHmac = (key, input, saltLength = 16) => {
    const random = crypto_1.default.randomBytes(Math.ceil(saltLength / 2)).toString('hex').slice(0, saltLength);
    return random + crypto_1.default.createHmac('sha256', key).update(input + random).digest('hex');
};
/**
 * Checking a HMAC value
 * @returns boolean
 */
Hash.checkHmac = (key, input, hmac, saltLength = 16) => {
    return crypto_1.default.createHmac('sha256', key).update(input + hmac.slice(0, saltLength))
        .digest('hex') === hmac.slice(saltLength);
};
exports.default = Hash;
