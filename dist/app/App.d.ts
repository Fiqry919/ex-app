/// <reference types="node" />
import Encryption from "simple-aes-crypto";
import { Encode } from "./interfaces/Response";
import { Exception, HttpStatus } from "./Exception";
import { NextFunction, Request, Response } from "express";
import { AuthCallback, TypeConstructor } from "./interfaces/App";
export { isEmail } from "privy-validator/dist/common/validator";
/**
 * Getting value from .env
 * @param key environment keys
 * @returns string
 */
export declare const env: (key: string) => any;
/**
 * Read public directory
 * @returns string
 */
export declare const dir: (dir?: string, rootDir?: boolean) => string[];
/**
 * Read file in public directory
 * @param file
 */
export declare const asset: (file: string, encoding?: BufferEncoding) => string;
/**
 * Instance response JSON
 * @returns Response
 */
export declare const json: (res: Response, data: Encode, encrypt?: boolean) => Response<any, Record<string, any>>;
/**
 * Render view
 */
export declare const view: (page: string, compact?: any, code?: HttpStatus) => (_: Request, res: Response) => void | Response<any, Record<string, any>>;
/**
 * Render view or catch json
 */
export declare const error: (exception: Exception) => (_: Request, res: Response) => void | Response<any, Record<string, any>>;
/**
 * Instance aes
 */
export declare const aes: (key?: string) => Encryption;
/**
 * Aes encryption
 * @returns string
 */
export declare const encrypt: (data: any) => string;
/**
 * Aes decryption
 * @returns any
 */
export declare const decrypt: (encrypted: string) => any;
/**
 * Generate jsonwebtoken
 * @returns string
 */
export declare const generateJwt: (payload: any, expiresIn?: string | number) => string;
/**
 * Delay execute time
 */
export declare const sleep: (second: number) => Promise<unknown>;
/**
 * Authenticate strategy
 */
export declare function Authenticate(callback: AuthCallback, cookie?: boolean | string): (req: Request, response: Response, next: NextFunction) => Promise<any>;
export declare function Authenticate(callback: AuthCallback, cookie?: boolean | string): (req: Request, next: NextFunction) => Promise<any>;
/**
 * Generate random string or number
 * @param length number
 * @param type String | Number | Buffer
 * @param encoding buffer encoding with default hex, this can apply only when type buffer.
 */
export declare const random: (length: number, type?: TypeConstructor, encoding?: BufferEncoding) => string | number;
/**
 * Make a log file
 * @param file full path filename
 * @param value log value
 * @param timestamp usage timestamp
 */
export declare const writeLog: (file: string, value: string, timestamp?: boolean) => void;
