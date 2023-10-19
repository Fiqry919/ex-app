/**
 * Decode aes encryption
 */
export type Decode<T = string> = T;
/**
 * Default Encode aes encryption
 */
export declare const DefaultEncode: Encode;
/**
 * Encode aes encryption
 */
export interface Encode {
    /**
     * response status
     */
    status?: boolean;
    /**
     * response code
     */
    code?: number;
    /**
     * response message
     */
    message?: any;
    /**
     * response result
     */
    result?: any;
}
/**
 * instanceOf Encode
 */
export declare const Encode: (target: any) => target is Encode;
