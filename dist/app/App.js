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
exports.writeLog = exports.random = exports.Authenticate = exports.sleep = exports.generateJwt = exports.decrypt = exports.encrypt = exports.aes = exports.error = exports.view = exports.json = exports.asset = exports.dir = exports.env = exports.isEmail = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env_tracking_1 = __importDefault(require("env-tracking"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const simple_aes_crypto_1 = __importDefault(require("simple-aes-crypto"));
const Response_1 = require("./Response");
const Exception_1 = require("./Exception");
const App_1 = require("./interfaces/App");
var validator_1 = require("privy-validator/dist/common/validator");
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return validator_1.isEmail; } });
/**
 * Getting value from .env
 * @param key environment keys
 * @returns string
 */
const env = (key) => env_tracking_1.default.get(key);
exports.env = env;
/**
 * Read public directory
 * @returns string
 */
const dir = (dir, rootDir) => fs_1.default
    .readdirSync(path_1.default.join(process.cwd(), `${App_1.AppConfig.serveStatic}/${dir}`), { withFileTypes: true })
    .map((v) => rootDir ? path_1.default.join(v.path, v.name) : path_1.default.join(dir, v.name));
exports.dir = dir;
/**
 * Read file in public directory
 * @param file
 */
const asset = (file, encoding) => fs_1.default.readFileSync(path_1.default.join(process.cwd(), `${App_1.AppConfig.serveStatic}/${file}`), encoding);
exports.asset = asset;
/**
 * Instance response JSON
 * @returns Response
 */
const json = (res, data, encrypt) => res.status(data.code | Exception_1.HttpStatus.OK).json((0, Response_1.encode)(data, encrypt));
exports.json = json;
/**
 * Render view
 */
const view = (page, compact, code = Exception_1.HttpStatus.OK) => {
    return (_, res) => {
        try {
            return res.status(code).render(page, compact);
        }
        catch (e) {
            const error = Exception_1.Exception.parse(e);
            return res.status(error.code).json(error);
        }
    };
};
exports.view = view;
/**
 * Render view or catch json
 */
const error = (exception) => {
    return (_, res) => {
        try { // add extension '.ejs' for force render
            return res.status(exception.code).render(path_1.default.join(__dirname, `../views/error`), exception);
        }
        catch (e) {
            delete exception._locals;
            return res.status(exception.code).json(exception);
        }
    };
};
exports.error = error;
/**
 * Instance aes
 */
const aes = (key = (0, exports.env)("APP_KEY")) => new simple_aes_crypto_1.default({ key });
exports.aes = aes;
/**
 * Aes encryption
 * @returns string
 */
const encrypt = (data) => (0, exports.aes)().encrypt(data);
exports.encrypt = encrypt;
/**
 * Aes decryption
 * @returns any
 */
const decrypt = (encrypted) => (0, exports.aes)().decrypt(encrypted);
exports.decrypt = decrypt;
/**
 * Generate jsonwebtoken
 * @returns string
 */
const generateJwt = (payload, expiresIn) => jsonwebtoken_1.default.sign(payload, (0, exports.env)("APP_KEY"), expiresIn ? { expiresIn } : {});
exports.generateJwt = generateJwt;
/**
 * Delay execute time
 */
const sleep = (second) => __awaiter(void 0, void 0, void 0, function* () { return yield new Promise(f => setTimeout(f, (second * 1000))); });
exports.sleep = sleep;
/**
 * Authenticate strategy
 */
function Authenticate(callback, cookie = true) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (typeof res === 'function')
                next = res;
            const code = Exception_1.HttpStatus.UNAUTHORIZED;
            let token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
            if (!token && cookie)
                token = req.cookies[(typeof cookie === 'string' && cookie !== '') ? cookie : 'sid'];
            if (!token || token === '')
                throw new Exception_1.Exception('Unauthorized', code);
            const payload = jsonwebtoken_1.default.verify(token, (0, exports.env)("APP_KEY"), (e, payload) => {
                if (e)
                    throw new Exception_1.Exception(e.message.replace("jwt", "session").capitalize(), code);
                delete payload.iat;
                return payload;
            });
            req.user = payload;
            yield callback(null, payload, (error, user) => {
                if (error)
                    next(error);
                if (user)
                    req.user = user;
                next();
            });
        }
        catch (e) {
            return yield callback(Exception_1.Exception.parse(e));
        }
    });
}
exports.Authenticate = Authenticate;
/**
 * Generate random string or number
 * @param length number
 * @param type String | Number | Buffer
 * @param encoding buffer encoding with default hex, this can apply only when type buffer.
 */
const random = (length, type = Buffer, encoding) => {
    if (type !== String && type !== Number && type !== Buffer)
        throw new Error("Invalid argument of type");
    const size = type === Buffer ? (length / 2) : length;
    const characters = type !== Number ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' : '1234567890';
    let result = '';
    for (let i = 0; i < size; i++)
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    return type === String ? result : type === Number ? parseInt(result) : Buffer.from(result).toString(encoding || 'hex');
};
exports.random = random;
/**
 * Make a log file
 * @param file full path filename
 * @param value log value
 * @param timestamp usage timestamp
 */
const writeLog = (file, value, timestamp = true) => {
    const directory = file.replace(/\\/g, '/').split('/').slice(0, -1).join('/');
    var value = timestamp ? `[${new Date().format()}] ${value}` : value;
    var data = `${value}\n`; // new in top
    try {
        if (!fs_1.default.existsSync(file))
            fs_1.default.mkdirSync(directory, { recursive: true });
        const read = fs_1.default.readFileSync(file, 'utf8').split('\n');
        for (const x of read)
            if (x != '')
                data += `${x}\n`;
    }
    catch (error) { /** nothing */ }
    const stream = fs_1.default.createWriteStream(file, { flags: 'w' });
    stream.write(data);
    stream.end();
};
exports.writeLog = writeLog;
