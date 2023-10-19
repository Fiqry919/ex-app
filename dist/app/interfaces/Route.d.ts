import { Router, Request, Response, NextFunction } from 'express';
/**
 * express router
 */
export declare const RouterOptions: typeof Router;
/**
 * Route filter
 */
export declare const RouteFilter: string[];
/**
 * Duplicate route
 */
export declare const RouteDuplicate: (identity: string) => never;
/**
 * route function
 */
export type RouteFunction = (request: Request, response: Response, next: NextFunction) => void;
/**
 * make all partial optional with specific or default type value
 */
export type Partial<T, L = keyof T> = {
    [P in keyof T]?: L;
};
/**
 * router options
 */
export type RouterOptions = RouteOptions | RouteGroupOptions;
/**
 * route options
 */
export interface RouteOptions {
    /**
     * method options
     */
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    /**
     * path options
     */
    path: string;
    /**
     * handler options
     */
    handler: RouteFunction;
    /**
     * middleware options
     */
    middleware?: RouteFunction | RouteFunction[];
}
/**
 * route group options
 */
export interface RouteGroupOptions {
    /**
     * prefix options
     */
    prefix?: string;
    /**
     * route options
     */
    group: RouteOptions[];
    /**
     * middleware options
     */
    middleware?: RouteFunction | RouteFunction[];
}
