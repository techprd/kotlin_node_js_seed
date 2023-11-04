package routes

import model.Task
import require
import utils.Utils.randomId

fun router() {
    val express = require("express")
    val router = express.Router()

    val db = hashMapOf<String, Task>()

    arrayOf("Kotlin is Awesome!", "Buy Milk", "Check Post office", "Call John").forEach {
        val id = randomId()
        db[id] = Task(id, it)
    }

    router.get("/") { _, res ->
        res.render("index")
    }

    router.get("/api/tasks") { _, res ->
        val values = JSON.stringify(db.values.map { it.toJson() })
        res.send(values)
    }

    router.get("/api/task/:id") { req, res ->
        res.json(db[req.params.id])
    }

    router.post("/api/task/:id") { req, res ->
        val task = Task.fromJson(req.body)
        db[task.id] = task
        res.send(task.toJson())
    }

    return router
}
