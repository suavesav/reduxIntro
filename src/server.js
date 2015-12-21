import Server from 'socket.io';

export default function startServer(store) {
    //Start the server
    const io = new Server().attach(8090);

    // Subscribe to the store
    store.subscribe( () => io.emit('state', store.getState().toJS()) );
    //Listen to the connection
    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
    });
}
