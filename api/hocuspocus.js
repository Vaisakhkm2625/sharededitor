// api/hocuspocus.js

//import { HocuspocusServer } from '@hocuspocus/server'
//import { Server } from 'http'
//import { createEdgeHandler } from '@vercel/node'
//
//const server = new HocuspocusServer()
//
//const handler = (req, res) => {
//    // Handle incoming requests with Hocuspocus
//    server.handle(req, res)
//}
//
//export default createEdgeHandler(handler)

import { HocuspocusServer } from '@hocuspocus/server'
import { createEdgeHandler } from '@vercel/edge'

const server = new HocuspocusServer()

export default createEdgeHandler(server.handle.bind(server))
