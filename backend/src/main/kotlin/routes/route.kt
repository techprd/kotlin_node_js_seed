import model.Task
import kotlin.math.floor
import kotlin.random.Random

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

    router.get("/tasks") { _, res ->
        res.send(db.values.toList())
    }

    router.get("/task/:id") { req, res ->
        res.json(db[req.params.id])
    }

    router.post("/task/:id") { req, res ->
        val task = JSON.parse<Task>(JSON.stringify(req.body))
        db[task.id] = task
        res.json(task)
    }

    return router
}

fun randomId(): String {
    var text = ""
    val possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (i in 0..4)
        text += possible[floor(Random.nextDouble() * possible.length).toInt()]

    return text
}
