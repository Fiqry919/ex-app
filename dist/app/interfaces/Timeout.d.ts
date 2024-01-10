import { Response } from "express";
export interface TimeoutOptions {
    time: number;
    callback: (response: Response) => Response;
}
