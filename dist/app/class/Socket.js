"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const socket_io_1 = require("socket.io");
class Socket {
}
_a = Socket;
Socket.initialized = false;
/**
 * direct to static method
 */
// constructor(private options: Partial<ServerOptions>) { }
/**
 * Initialize socket server
 */
Socket.initialize = (server, options) => {
    if (!_a.initialized && !_a.connection) {
        _a.connection = new socket_io_1.Server(server, options);
        _a.initialized = true;
    }
    else {
        console.warn(chalk_1.default.yellow('Socket already initialized. Further calls to initialize will be ignored.'));
    }
    return _a;
};
/**
 * Need fixed and change to public method
 */
Socket.createChannel = (namespace, rooms) => {
    if (!_a.initialized)
        throw new Error("Socket not initialized.");
    const channel = _a.connection.of(namespace);
    if (rooms) {
        rooms.forEach(room => channel.adapter.rooms.set(room, new Set()));
    }
};
exports.default = Socket;
