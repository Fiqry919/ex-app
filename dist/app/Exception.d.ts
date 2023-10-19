import { HttpStatus } from "./interfaces/HttpStatus";
export interface Exception extends Error {
    /**
     * exception status
     */
    status: boolean;
    /**
     * exception code
     */
    code: HttpStatus;
    /**
     * exception message
     */
    message: any;
}
/**
 * Exception constructor
 */
export interface ExceptionConstructor extends ErrorConstructor {
    new (message: any, code?: HttpStatus): Exception;
    (message: any, code?: HttpStatus): Exception;
    /**
     * Parse unknown error to Exception.
     * when `NODE_ENV=development` show message with error stack
     * @returns Exception
     */
    parse: (e: unknown, trace?: boolean) => Exception;
    readonly prototype: Exception;
}
/**
 * Exception error
 */
export declare const Exception: ExceptionConstructor;
/**
 * HTTP Response code
 */
export { HttpStatus };
