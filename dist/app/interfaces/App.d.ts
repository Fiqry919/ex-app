/// <reference types="node" />
import Socket from "../class/Socket";
import { CorsOptions } from "cors";
import { DataSource } from "typeorm";
import { SMTPOptions } from "./Mail";
import { SessionOptions } from "express-session";
import { LogOptions } from "./Log";
export interface AppOptions {
    /**
     * Object Relation Mapping, now only support for typeorm
     */
    dataSource?: DataSource;
    /**
     *
     */
    providers?: any[];
    /**
     * Configuration cors
     */
    cors?: CorsOptions;
    /**
     * Configuration express session
     */
    session?: SessionOptions;
    /**
     * Allow serve-static for upload file.
     * by default is false, and directory default is `./res/public`
     * or can fill this with custom directory.
     */
    serveStatic?: boolean | string;
    /**
     * Allow render view for return view, engine use is `ejs`.
     * by default is false, and directory default is `./res/views`
     * or can fill this with custom directory.
     */
    viewEngine?: boolean | string;
    /**
     *
     */
    smtpTransport?: SMTPOptions;
    /**
     *
     */
    trustProxy?: boolean;
    /**
     *
     */
    socket?: Socket;
    /**
     *
     */
    log?: boolean | LogOptions;
}
/**
 * instance constructor type
 */
export type TypeConstructor<T = 
/**
 * String
 */
StringConstructor | 
/**
 * Number
 */
NumberConstructor | 
/**
 * Date
 */
DateConstructor | 
/**
 * Object
 */
ObjectConstructor | 
/**
 * Buffer
 */
BufferConstructor | 
/**
 * Regex
 */
RegExpConstructor | 
/**
 * Symbol
 */
SymbolConstructor | 
/**
 * Boolean
 */
BooleanConstructor> = T;
export interface AuthCallback {
    (error: any, payload?: any, next?: NextCallback): Promise<any>;
}
export interface NextCallback {
    (error?: any, user?: any): void;
}
export interface NextError {
    /**
     * Error message
     */
    message?: any;
    /**
     * Error code
     */
    code?: number;
}
export declare const AppConfig: AppOptions;
