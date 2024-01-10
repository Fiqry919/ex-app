import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
declare class Socket {
    private static initialized;
    static connection: Server;
    /**
     * direct to static method
     */
    /**
     * Initialize socket server
     */
    static initialize: (server: HttpServer, options: Partial<ServerOptions>) => typeof Socket;
    /**
     * Need fixed and change to public method
     */
    private static createChannel;
}
export default Socket;
