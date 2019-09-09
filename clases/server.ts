import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
export default class Server {
    public app: express.Application;
    public port: number;
    public io:SocketIO.Server;
    public httpServer: http.Server;
    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.escuchaSocket();
    }

    private escuchaSocket(){
        console.log('Escuchando conexiones - Sockets');
        this.io.on('connection',cliente =>{
            console.log('Nuevo cliente');
        });
    }

    start (callback: Function){
        this.httpServer.listen(this.port,callback);
    }
}