import { NextFunction, Response } from "express";
import { TimeoutOptions } from "./interfaces/Timeout";
declare const Timeout: (options?: Number | boolean | TimeoutOptions) => (_: any, response: Response, next: NextFunction) => void;
export default Timeout;
