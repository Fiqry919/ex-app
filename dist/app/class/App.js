"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../Compiler");
const cors_1 = __importDefault(require("cors"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const Error_1 = require("../Error");
const express_1 = __importDefault(require("express"));
class Application {
    constructor(router, options) {
        this.router = router;
        this.options = options;
        this.init();
    }
    /**
     * Initialize application
     */
    init() {
        var _a, _b, _c, _d;
        try {
            const app = this.app = (0, express_1.default)();
            app.use((0, express_session_1.default)(((_a = this.options) === null || _a === void 0 ? void 0 : _a.session) || { secret: 'SessionSecret', resave: true, saveUninitialized: true }));
            app.use((0, cors_1.default)(((_b = this.options) === null || _b === void 0 ? void 0 : _b.cors) || { credentials: true, origin: '*' })).use(express_1.default.urlencoded({ extended: true })).use(express_1.default.json());
            this.useEngine(process.cwd());
            if ((_c = this.options) === null || _c === void 0 ? void 0 : _c.providers)
                (_d = this.options) === null || _d === void 0 ? void 0 : _d.providers.forEach(item => app.use(item));
            this.router.forEach(item => app.use(item));
            app.use(Error_1.ErrorHandler);
            console.clear();
        }
        catch (e) {
            console.error('Error:', chalk_1.default.red(e.message));
        }
    }
    /**
     * Logging listener
     */
    listen(port) {
        this.app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log(`Timezone: ${chalk_1.default.cyan(Intl.DateTimeFormat().resolvedOptions().timeZone)}`);
            if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.dataSource) {
                try {
                    yield this.options.dataSource.initialize(); // need support other orm
                    console.log(`Data source connection: ${chalk_1.default.green("OK")}`);
                }
                catch (e) {
                    console.error('Error:', chalk_1.default.red(e.message));
                }
            }
            console.log(`Listening on port ${chalk_1.default.yellow(port)}`);
        }));
    }
    useEngine(directory) {
        var _a, _b;
        const env = process.env.NODE_ENV;
        const viewEngine = (_a = this.options) === null || _a === void 0 ? void 0 : _a.viewEngine;
        const serveStatic = (_b = this.options) === null || _b === void 0 ? void 0 : _b.serveStatic;
        if (env === 'production') {
            if (viewEngine)
                this.app.set('view engine', 'ejs').set('views', path_1.default.join(directory, typeof viewEngine === 'string' ? viewEngine : 'dist/views'));
            if (serveStatic)
                this.app.use('/public', express_1.default.static(path_1.default.join(directory, typeof serveStatic === 'string' ? serveStatic : 'dist/public')));
        }
        if (env === 'development') {
            if (viewEngine)
                this.app.set('view engine', 'ejs').set('views', path_1.default.join(directory, typeof viewEngine === 'string' ? viewEngine : 'src/views'));
            if (serveStatic)
                this.app.use('/public', express_1.default.static(path_1.default.join(directory, typeof serveStatic === 'string' ? serveStatic : 'src/public')));
        }
    }
}
exports.default = Application;
