import { Options } from 'morgan';
import { Request, Response } from "express";
export interface LogOptions {
    /**
     *
     */
    format: 'combined' | 'common' | 'dev' | 'short' | 'tiny';
    /**
     *
     */
    options?: Options<Request, Response>;
}
