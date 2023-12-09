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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
const chalk_1 = __importDefault(require("chalk"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const App_1 = require("../App");
const App_2 = require("../interfaces/App");
const Mail_1 = require("../interfaces/Mail");
class Mail {
    static send(options, template) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.initialized)
                    throw new Error("err initialized");
                const directory = App_2.AppConfig.viewEngine + template.view;
                const html = ejs_1.default.render(fs_1.default.readFileSync(directory, 'utf-8'), template.compact);
                yield this.transport.sendMail(Object.assign(Object.assign(Object.assign({}, this.from), options), { html }));
                console.log(`Sent mail: ${chalk_1.default.green('OK')}`);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    static sendText(options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.initialized)
                    throw new Error("err initialized");
                yield this.transport.sendMail(Object.assign(Object.assign({}, this.from), options));
                console.log(`Sent mail: ${chalk_1.default.green('OK')}`);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /**
     * @deprecated Direct email to SMS (not use now)
     * @notes only work with united state, canada, or international phone number
     */
    static sendDirect(phone, message, service, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.initialized)
                throw new Error("err initialized");
            let providers = [];
            const carrier = service !== undefined && !['us', 'canada', 'intl'].includes(service);
            if (carrier)
                providers.push(service);
            else
                providers = Mail_1.Provider[service || 'us'];
            for (let i = 0; i < providers.length; i++) {
                const to = providers[i].replace('%s', phone);
                const options = Object.assign(Object.assign({}, this.from), { to, subject: null, text: message, html: message });
                try {
                    let info = yield this.transport.sendMail(options);
                    console.log(chalk_1.default.yellow('accepted:'), chalk_1.default.green(info.accepted[0]));
                    console.log(chalk_1.default.yellow('response:'), chalk_1.default.green(info.response), "\n");
                    if (cb)
                        cb(null, info);
                }
                catch (e) {
                    if (cb)
                        cb(e);
                }
            }
        });
    }
}
_a = Mail;
Mail.initialized = false;
Mail.from = { from: `${(0, App_1.env)('APP_NAME')}@express.com` };
Mail.initialize = (options) => {
    if (!_a.initialized && !_a.transport) {
        _a.transport = nodemailer_1.default.createTransport(options);
        _a.initialized = true;
    }
};
exports.default = Mail;
