/// <reference types="node" />
import crypto from 'crypto';
export default class Hash {
    private constructor();
    /**
     * instance crypto when exported
     */
    static crypto: typeof crypto;
    /**
     * Make a hashed value
     * @returns string
     */
    static make: (input: string, saltLength?: number) => string;
    /**
     * Checking hashed value
     * @returns boolean
     */
    static check: (input: string, hash: string, saltLength?: number) => boolean;
    /**
     * Make a HMAC value
     * @returns string
     */
    static makeHmac: (key: string, input: string, saltLength?: number) => string;
    /**
     * Checking a HMAC value
     * @returns boolean
     */
    static checkHmac: (key: string, input: string, hmac: string, saltLength?: number) => boolean;
}
