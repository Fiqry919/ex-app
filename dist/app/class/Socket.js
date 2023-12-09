"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class Socket {
    constructor(options) {
        this.options = options;
        this.initialized = false;
        /**
         * Initialize socket server
         */
        this.initialize = (server) => {
            if (!this.initialized && !this.connection) {
                this.connection = new socket_io_1.Server(server, this.options);
                this.initialized = true;
            }
            else {
                console.warn('Socket already initialized. Further calls to initialize will be ignored.');
            }
            return this;
        };
        /**
         * Need fixed and change to public method
         */
        this.createChannel = (namespace, rooms) => {
            if (!this.initialized)
                throw new Error("Socket not initialized.");
            const channel = this.connection.of(namespace);
            if (rooms) {
                rooms.forEach(room => channel.adapter.rooms.set(room, new Set()));
            }
        };
    }
}
exports.default = Socket;
