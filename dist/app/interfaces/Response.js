"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encode = exports.DefaultEncode = void 0;
/**
 * Default Encode aes encryption
 */
exports.DefaultEncode = {
    /**
     * default status
     */
    status: true,
    /**
     * default code
     */
    code: 200,
    /**
     * default message
     */
    message: "",
    /**
     * default result
     */
    result: []
};
/**
 * instanceOf Encode
 */
const Encode = (target) => typeof target === 'object' &&
    ('status' in target || 'code' in target || 'message' in target || 'result' in target);
exports.Encode = Encode;
