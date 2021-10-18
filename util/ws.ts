const wss2 = (a) => {
    a.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {

            let lmessage = JSON.parse(message)


            switch (lmessage.type) {
                case 'setSocketId':
                    ws.socketId = lmessage.id;

                    break;
            }
            console.log(a.clients);

            a.clients.forEach(ws => {
                let data = {
                    type: 'testMsg',
                    data: "query.msg"
                }
                let oksend = JSON.stringify(data);
                console.log(ws.socketId);

                if (ws.socketId == lmessage.to && ws.readyState == 1) {
                    ws.send(ws.socketId)
                }
            })
        });

        ws.send('something');

    });
}
export const WebSocketApi = wss2