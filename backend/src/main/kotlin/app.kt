import utils.Utils.normalizePort

external fun require(module: String): dynamic

external val process: dynamic
external val __dirname: dynamic

fun main(args: Array<String>) {
    println("Server Starting!")

    val express = require("express")
    val app = express()
    val path = require("path")
    val bodyParser = require("body-parser")
    val http = require("http")
    /**
     * Get port from environment and store in Express.
     */
    val port = normalizePort(process.env.PORT)
    app.use(bodyParser.json())
    app.set("port", port)

    // view engine setup
    app.set("views", path.join(__dirname, "../../webapp/public"))
    app.set("view engine", "ejs")
    app.use(express.static("webapp/public"))

    http.createServer(app)
    app.listen(port) {
        println("Example app listening on port $port!")
    }

    app.use("/", router())
}


