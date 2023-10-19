import '../Compiler';
import { AppOptions } from '../interfaces/App';
import { Router } from "express";
export default class Application {
    private router;
    private options?;
    /**
     * Application
     */
    private app;
    constructor(router: Router[], options?: AppOptions);
    /**
     * Initialize application
     */
    private init;
    /**
     * Logging listener
     */
    listen(port: number): void;
    private useEngine;
}
