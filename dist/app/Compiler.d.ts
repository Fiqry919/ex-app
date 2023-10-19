import { UnitDate } from "./interfaces/Compiler";
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
    interface Array<T> {
        /**
         * Removing specific key from Array object
         */
        ObjectFilter(filter: string[]): T[];
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
/**
 * Typeorm define
 */
