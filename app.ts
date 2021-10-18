import { Server } from 'http'
import { print } from 'configs/utils'
import Environment from 'configs/environments'
import createServer from 'configs/application'
import * as bootstrap from 'configs/bootstrap'
import serve from "koa-static2";
import ws from 'ws'
import { WebSocketApi } from './util/ws'//引入封装的ws模块
module.exports = (async (): Promise<Server> => {
  try {
    const app = await createServer()

    app.use(serve("public", __dirname + "/public"));
    // let _server = app.listen(3000);  // start

    // _server.close()

    let server = app.listen(Environment.port, () => {
      print.log(
        `server listening on ${Environment.port}, in ${Environment.identity} mode.`,
      )
      bootstrap.after()
    })

    const wss = new ws.Server({ server })
    WebSocketApi(wss)

    return
  } catch (e) {
    console.log(e)
  }
})()
