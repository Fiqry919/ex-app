import '../Compiler';
import { Router } from "express";
import { AppOptions } from '../interfaces/App';
export default class Application {
    private router;
    private options?;
    /**
     * Application
     */
    private app;
    /**
     * Server
     */
    private server;
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
