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
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Mail_1 = __importDefault(require("./Mail"));
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_1 = require("http");
const Error_1 = require("../Error");
const App_1 = require("../interfaces/App");
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
        var _a, _b, _c, _d, _e, _f;
        try {
            const app = this.app = (0, express_1.default)();
            this.server = new http_1.Server(app);
            if (this.options.trustProxy)
                app.set("trust proxy", true);
            app.use((0, express_session_1.default)(((_a = this.options) === null || _a === void 0 ? void 0 : _a.session) || { secret: 'SessionSecret', resave: false, saveUninitialized: false })).use((0, cookie_parser_1.default)());
            app.use((0, cors_1.default)(((_b = this.options) === null || _b === void 0 ? void 0 : _b.cors) || { credentials: true, origin: '*' })).use(express_1.default.urlencoded({ extended: true })).use(express_1.default.json());
            this.useEngine(process.cwd());
            if (this.options.log) {
                app.use(typeof this.options.log === 'boolean'
                    ? (0, morgan_1.default)('combined')
                    : (0, morgan_1.default)(this.options.log.format, this.options.log.options));
            }
            if ((_c = this.options) === null || _c === void 0 ? void 0 : _c.socket) {
                this.options.socket.initialize(this.server);
            }
            if ((_d = this.options) === null || _d === void 0 ? void 0 : _d.smtpTransport) {
                Mail_1.default.initialize(this.options.smtpTransport);
            }
            if ((_e = this.options) === null || _e === void 0 ? void 0 : _e.providers) {
                (_f = this.options) === null || _f === void 0 ? void 0 : _f.providers.forEach(item => app.use(item));
            }
            app.use(this.router).use(Error_1.ErrorHandler);
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
        this.server.listen(port, () => __awaiter(this, void 0, void 0, function* () {
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
        const viewEngine = (_a = this.options) === null || _a === void 0 ? void 0 : _a.viewEngine;
        const serveStatic = (_b = this.options) === null || _b === void 0 ? void 0 : _b.serveStatic;
        if (viewEngine) {
            const configEngine = typeof viewEngine === 'string' ? App_1.AppConfig.viewEngine = viewEngine : 'res/views';
            const view_directory = path_1.default.join(directory, configEngine);
            try {
                fs_1.default.readdirSync(view_directory, { withFileTypes: true });
            }
            catch (e) {
                fs_1.default.mkdirSync(view_directory, { recursive: true });
            }
            this.app.set('view engine', 'ejs').set('views', view_directory);
        }
        if (serveStatic) {
            const configStatic = typeof serveStatic === 'string' ? App_1.AppConfig.serveStatic = serveStatic : 'res/public';
            const static_directory = path_1.default.join(directory, configStatic);
            try {
                fs_1.default.readdirSync(static_directory, { withFileTypes: true });
            }
            catch (e) {
                fs_1.default.mkdirSync(static_directory, { recursive: true });
            }
            this.app.use('/public', express_1.default.static(static_directory));
        }
    }
}
exports.default = Application;
