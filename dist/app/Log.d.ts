/// <reference types="node" />
import { LogOptions } from "./interfaces/Log";
declare const Log: (options?: boolean | LogOptions) => (req: import("http").IncomingMessage, res: import("http").ServerResponse<import("http").IncomingMessage>, callback: (err?: Error) => void) => void;
export default Log;
