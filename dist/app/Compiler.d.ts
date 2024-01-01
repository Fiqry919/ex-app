import { UnitDate } from "./interfaces/Compiler";
import { HttpStatus } from "./Exception";
declare global {
    interface String {
        /**
         * Make a first latter to uppercase
         */
        capitalize(): string;
    }
    interface Date {
        /**
         * Date formatting
         * @format yyyy-MM-dd HH:mm:ss
         */
        format(format?: string): string;
        /**
         * Customize add value date
         */
        add(value: number, unit: UnitDate): Date;
    }
    interface BigInt {
        toJSON(): string;
    }
    interface Array<T> {
        /**
         * Removing specific key from Array object
         */
        ObjectFilter(filter: string[]): T[];
    }
    class Exception extends Error {
        status: boolean;
        code: number;
        constructor(message: any, code?: HttpStatus, status?: boolean);
        static parse(e: unknown, trace?: boolean): Exception;
    }
}
declare module 'express' {
    interface Request {
        user?: any;
        /**
         * Getting request body or if empty request query
         */
        data?: () => any;
    }
}
