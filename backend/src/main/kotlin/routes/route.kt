import model.Task
import kotlin.js.Math

fun router() {
    val express = require("express")
    val router = express.Router()

    val db = hashMapOf<String, Task>()

    arrayOf("Kotlin is Awesome!", "Buy Milk", "Check Post office", "Call John").forEach {
        val id = randomId()
        db.put(id, Task(id, it))
    }

    router.get("/", { req, res ->
        res.render("index")
    })

    router.get("/tasks", { req, res ->
        res.send(db.values.toList())
    })

    router.get("/task/:id", { req, res ->
        res.json(db.get(req.params.id))
    })

    router.post("/task/:id", { req, res ->
        val task = JSON.parse<Task>(JSON.stringify(req.body))
        db.set(task.id, task)
        res.json(task)
    })

    return router
}

fun randomId(): String {
    var text = ""
    val possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (i in 0..4)
        text += possible[Math.floor(Math.random() * possible.length)]

    return text
}