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
exports.writeLog = exports.random = exports.hash_check = exports.hash = exports.Authenticate = exports.generate = exports.decrypt = exports.encrypt = exports.aes = exports.error = exports.view = exports.json = exports.env = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env_tracking_1 = __importDefault(require("env-tracking"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const simple_aes_crypto_1 = __importDefault(require("simple-aes-crypto"));
const Response_1 = require("./Response");
const crypto_1 = require("crypto");
const Exception_1 = require("./Exception");
/**
 * Getting value from .env
 * @param key environment keys
 * @returns string
 */
const env = (key) => env_tracking_1.default.get(key);
exports.env = env;
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
    return (res) => {
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
    return (res) => {
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
const generate = (payload, expiresIn) => jsonwebtoken_1.default.sign(payload, (0, exports.env)("APP_KEY"), expiresIn ? { expiresIn } : {});
exports.generate = generate;
/**
 * Authenticate strategy
 */
const Authenticate = (callback) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const code = Exception_1.HttpStatus.UNAUTHORIZED;
            const header = req.headers.authorization;
            if (!header || header.split(" ").length !== 2)
                throw new Exception_1.Exception('Unauthorized', code);
            const payload = jsonwebtoken_1.default.verify(header.split(" ")[1], (0, exports.env)("APP_KEY"), (e, payload) => {
                if (e)
                    throw new Exception_1.Exception(e.message.replace("jwt", "session").capitalize(), code);
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
};
exports.Authenticate = Authenticate;
/**
 * Make hash
 * @returns string hash
 */
const hash = (i, l = 16) => {
    const bytes = (0, crypto_1.randomBytes)(Math.ceil(l / 2)).toString('hex').slice(0, l);
    return bytes + (0, crypto_1.createHash)('sha256').update(i + bytes).digest('hex');
};
exports.hash = hash;
/**
 * Validate hash
 * @returns boolean
 */
const hash_check = (i, h, l = 16) => (0, crypto_1.createHash)('sha256').update(i + h.slice(0, l)).digest('hex') === h.slice(l);
exports.hash_check = hash_check;
/**
 * Generate random
 * @param length number
 * @param type String | Number | Buffer
 */
const random = (length, type = Buffer) => {
    if (type !== String && type !== Number && type !== Buffer)
        throw new Error("Invalid argument of type");
    const size = type === Buffer ? (length / 2) : length;
    const characters = type !== Number ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' : '1234567890';
    let result = '';
    for (let i = 0; i < size; i++)
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    return type === String ? result : type === Number ? Number(result) : Buffer.from(result).toString('hex');
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
