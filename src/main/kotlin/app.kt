/**
 * Created by techprd on 3/6/17.
 */
external fun require(module: String): dynamic

external val process: dynamic
external val __dirname: dynamic

fun main(args: Array<String>) {
    println("Server Starting!")

    val express = require("express")
    val app = express()
    val path = require("path")
    val debug = require("debug")("kotlin_node_js:server")
    val http = require("http")
    /**
     * Get port from environment and store in Express.
     */

    val port = normalizePort(process.env.PORT)
    app.set("port", port)

    // view engine setup
    app.set("views", path.join(__dirname, "../webapp"))
    app.set("view engine", "ejs")

    val server = http.createServer(app)
    server.listen(port)

    app.use("/", router())
}

fun normalizePort(arg: Int): Int {
    val port = arg.toInt()
    if (port >= 0) {
        // port number
        return port
    }
    return 3000
}