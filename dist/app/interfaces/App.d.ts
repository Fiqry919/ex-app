/// <reference types="node" />
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { CorsOptions } from "cors";
import { SessionOptions } from "express-session";
import { DataSource } from "typeorm";
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
    mail?: SMTPOptions;
    /**
     *
     */
    trustProxy?: boolean;
}
/**
 * mail options
 */
export type SMTPOptions = SMTPTransport | SMTPTransport.Options;
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
