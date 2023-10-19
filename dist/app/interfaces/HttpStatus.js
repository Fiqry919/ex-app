"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    /**
     * Response status OK
     */
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    /**
     * Response status Created
     */
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    /**
     * Response status Accepted
     */
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    /**
     * Response status No Content
     */
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * Response status Rest Content
     */
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    /**
     * Response status Partial Content
     */
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    /**
     * Response status Multiple Choices
     */
    HttpStatus[HttpStatus["MULTIPLE_CHOICE"] = 300] = "MULTIPLE_CHOICE";
    /**
     * Response status Moved Permanently
     */
    HttpStatus[HttpStatus["MOVED"] = 301] = "MOVED";
    /**
     * Response status Found (Previously "Moved temporarily")
     */
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    /**
     * Response status Not Modified
     */
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    /**
     * Response status Use Proxy (since HTTP/1.1)
     */
    HttpStatus[HttpStatus["USE_PROXY"] = 305] = "USE_PROXY";
    /**
     * Response status Switch Proxy
     */
    HttpStatus[HttpStatus["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
    /**
     * Response status Temporary Redirect (since HTTP/1.1)
     */
    HttpStatus[HttpStatus["TEMP_REDIRECT"] = 307] = "TEMP_REDIRECT";
    /**
     * Response status Permanent Redirect
     */
    HttpStatus[HttpStatus["REDIRECT"] = 308] = "REDIRECT";
    /**
     * Response status Bad Request
     */
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /**
     * Response status Unauthorized
     */
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /**
     * Response status Payment Required
     */
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /**
     * Response status Forbidden
     */
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    /**
     * Response status Not Found
     */
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    /**
     * Response status Method Not Allowed
     */
    HttpStatus[HttpStatus["NOT_ALLOWED"] = 405] = "NOT_ALLOWED";
    /**
     * Response status Not Acceptable
     */
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    /**
     * Response status Proxy Authentication Required
     */
    HttpStatus[HttpStatus["AUTH_PROXY"] = 407] = "AUTH_PROXY";
    /**
     * Response status Request Timeout
     */
    HttpStatus[HttpStatus["TIMEOUT"] = 408] = "TIMEOUT";
    /**
     * Response status Conflict
     */
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    /**
     * Response status Gone
     */
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    /**
     * Response status Page/ Session Expired (Unofficial by Laravel)
    */
    HttpStatus[HttpStatus["EXPIRED"] = 419] = "EXPIRED";
    /**
     * Response status too many requests in a given amount of time
    */
    HttpStatus[HttpStatus["TO_MANY_REQUEST"] = 429] = "TO_MANY_REQUEST";
    /**
     * Response status session has expired (Unofficial by Microsoft's)
     */
    HttpStatus[HttpStatus["SESSION_TIMEOUT"] = 440] = "SESSION_TIMEOUT";
    /**
     * Response status Internal Server Error
     */
    HttpStatus[HttpStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    /**
     * Response status Not Implemented
     */
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /**
     * Response status Bad Gateway
     */
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /**
     * Response status Service Unavailable
     */
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /**
     * Response status Gateway Timeout
     */
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    /**
     * Response status HTTP Version Not Supported
     */
    HttpStatus[HttpStatus["UNSUPPORTED_HTTP_VERSION"] = 505] = "UNSUPPORTED_HTTP_VERSION";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
