package services

import events.TodoEventEmitter
import model.Task

class StorageService(val eventEmitter: TodoEventEmitter) : LinkedHashMap<String, Task>() {

    val addEvent: String = "addTask"
    val doneEvent: String = "doneEvent"
    val undoneEvent: String = "undoneEvent"

    init {
        eventEmitter.on(addEvent, {
            console.log("added task: %s", it.isDone)
        })
        eventEmitter.on(doneEvent, {
            console.log("marked task: %s as done", it.text)
            this.update(task = it)
        })
        eventEmitter.on(undoneEvent, {
            console.log("marked task: %s as undone", it.text)
            this.update(task = it)
        })
    }

    fun getAll(callback: () -> Unit) {
        return Ajax().get("/tasks") {
            val tasks = JSON.parse<Array<Task>>(it.responseText)
            tasks.forEach {
                val task = Task(it.id, it.text)
                task.isArchived = it.isArchived
                task.isDone = it.isDone
                this.put(it.id, it)
            }
            callback()
        }
    }

    fun update(task: Task) {
        return Ajax().post("/task/${task.id}", task) {
            console.log(it.response)
        }
    }

    override fun put(key: String, value: Task): Task? {
        eventEmitter.trigger(addEvent, value)
        return super.put(key, value)
    }

}