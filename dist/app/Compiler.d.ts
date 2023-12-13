import { UnitDate } from "./interfaces/Compiler";
import { CustomMessage, ValidationSchema } from "privy-validator/dist/interfaces/validator";
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
}
declare module 'express' {
    interface Request {
        user?: any;
        /**
         * Getting request body or if empty request query
         */
        data?: () => any;
        /**
         * validate request body or query
         */
        validate?: (schema: ValidationSchema, message?: CustomMessage) => Promise<any>;
    }
}
/**
 * Typeorm define
 */
