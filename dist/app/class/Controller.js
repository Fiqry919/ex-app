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
const privy_validator_1 = __importDefault(require("privy-validator"));
const Exception_1 = require("../Exception");
class Controller {
    constructor() {
        /**
         * Instance validator
         */
        this.validate = (data, schema, message) => __awaiter(this, void 0, void 0, function* () {
            const validator = yield privy_validator_1.default.make(data, schema, message);
            if (!validator.validate()) {
                /** optional added ip_address for limit action before throw */
                throw new Exception_1.Exception(validator.errors(), Exception_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
}
exports.default = Controller;
