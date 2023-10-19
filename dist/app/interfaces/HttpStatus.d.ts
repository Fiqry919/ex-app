export declare enum HttpStatus {
    /**
     * Response status OK
     */
    OK = 200,
    /**
     * Response status Created
     */
    CREATED = 201,
    /**
     * Response status Accepted
     */
    ACCEPTED = 202,
    /**
     * Response status No Content
     */
    NO_CONTENT = 204,
    /**
     * Response status Rest Content
     */
    RESET_CONTENT = 205,
    /**
     * Response status Partial Content
     */
    PARTIAL_CONTENT = 206,
    /**
     * Response status Multiple Choices
     */
    MULTIPLE_CHOICE = 300,
    /**
     * Response status Moved Permanently
     */
    MOVED = 301,
    /**
     * Response status Found (Previously "Moved temporarily")
     */
    FOUND = 302,
    /**
     * Response status Not Modified
     */
    NOT_MODIFIED = 304,
    /**
     * Response status Use Proxy (since HTTP/1.1)
     */
    USE_PROXY = 305,
    /**
     * Response status Switch Proxy
     */
    SWITCH_PROXY = 306,
    /**
     * Response status Temporary Redirect (since HTTP/1.1)
     */
    TEMP_REDIRECT = 307,
    /**
     * Response status Permanent Redirect
     */
    REDIRECT = 308,
    /**
     * Response status Bad Request
     */
    BAD_REQUEST = 400,
    /**
     * Response status Unauthorized
     */
    UNAUTHORIZED = 401,
    /**
     * Response status Payment Required
     */
    PAYMENT_REQUIRED = 402,
    /**
     * Response status Forbidden
     */
    FORBIDDEN = 403,
    /**
     * Response status Not Found
     */
    NOT_FOUND = 404,
    /**
     * Response status Method Not Allowed
     */
    NOT_ALLOWED = 405,
    /**
     * Response status Not Acceptable
     */
    NOT_ACCEPTABLE = 406,
    /**
     * Response status Proxy Authentication Required
     */
    AUTH_PROXY = 407,
    /**
     * Response status Request Timeout
     */
    TIMEOUT = 408,
    /**
     * Response status Conflict
     */
    CONFLICT = 409,
    /**
     * Response status Gone
     */
    GONE = 410,
    /**
     * Response status Page/ Session Expired (Unofficial by Laravel)
    */
    EXPIRED = 419,
    /**
     * Response status too many requests in a given amount of time
    */
    TO_MANY_REQUEST = 429,
    /**
     * Response status session has expired (Unofficial by Microsoft's)
     */
    SESSION_TIMEOUT = 440,
    /**
     * Response status Internal Server Error
     */
    SERVER_ERROR = 500,
    /**
     * Response status Not Implemented
     */
    NOT_IMPLEMENTED = 501,
    /**
     * Response status Bad Gateway
     */
    BAD_GATEWAY = 502,
    /**
     * Response status Service Unavailable
     */
    SERVICE_UNAVAILABLE = 503,
    /**
     * Response status Gateway Timeout
     */
    GATEWAY_TIMEOUT = 504,
    /**
     * Response status HTTP Version Not Supported
     */
    UNSUPPORTED_HTTP_VERSION = 505
}
