package services

import events.TodoEventEmitter
import model.Task

class StorageService(val eventEmitter: TodoEventEmitter) : LinkedHashMap<String, Task>() {

    val addEvent: String = "addTask"
    val doneEvent: String = "doneEvent"
    val undoneEvent: String = "undoneEvent"

    init {
        eventEmitter.on(addEvent, {
            console.log("added task: %s", it.text)
        })
        eventEmitter.on(doneEvent, {
            console.log("marked task: %s as done", it.text)
        })
        eventEmitter.on(undoneEvent, {
            console.log("marked task: %s as undone", it.text)
        })
    }

    override fun put(key: String, value: Task): Task? {
        eventEmitter.trigger(addEvent, value)
        return super.put(key, value)
    }

}