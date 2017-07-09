fun router() {
    val express = require("express")
    val router = express.Router()

    val cust = Customer(1, "John", "john@gmail.com")

    router.get("/", { req, res ->
        res.render("index", cust)
    })

    return router
}