import { Request } from "express";
import { Decode, Encode } from "./interfaces/Response";
/**
 * parse format response
 */
export declare const parse: (data: Encode) => {
    status?: boolean;
    code?: number;
    message?: any;
    result?: any;
};
/**
 * filtering request
 */
export declare const filter: (request: Request) => any;
/**
 * response encoder
 */
export declare const encode: (object: Encode, _encryption?: boolean) => {
    status?: boolean;
    code?: number;
    message?: any;
    result?: any;
} | {
    data: string;
};
/**
 * response decoder.
 * auto detect encryption.
 */
export declare const decode: (object: Decode<any>, _encryption?: boolean) => any;
/**
 * custom response json encoder
 */
export declare class EncoderJSON<T> {
    private defaultFormat;
    constructor(defaultFormat: T);
    private parse;
    encode: (object: T, encryption?: boolean) => T | {
        data: string;
    };
    decode: (object: any, encryption?: boolean) => any;
}
