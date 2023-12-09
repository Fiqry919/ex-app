import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
declare class Socket {
    private options;
    private initialized;
    connection: Server;
    constructor(options: Partial<ServerOptions>);
    /**
     * Initialize socket server
     */
    initialize: (server: HttpServer) => this;
    /**
     * Need fixed and change to public method
     */
    private createChannel;
}
export default Socket;
