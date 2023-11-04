import routes.router
import utils.Utils.normalizePort

external fun require(module: String): dynamic

external val process: dynamic
external val __dirname: dynamic

fun main() {
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
    // TODO: find a better way to find the webapp views and js files
    app.set("views", path.join(__dirname, "../../../../../webapp/build/dist/js/productionExecutable"))
    app.set("view engine", "ejs")
    app.use(express.static(path.join(__dirname, "../../../../../webapp/build/dist/js/productionExecutable")))

    http.createServer(app)
    app.listen(port) {
        println("Example app listening on port $port!")
    }

    app.use("/", router())
}
