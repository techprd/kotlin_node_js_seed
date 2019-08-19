package events

import model.Task

class TodoEventEmitter {

    private val events: LinkedHashMap<String, ArrayList<(Task) -> Unit>> = linkedMapOf()

    fun on(eventName: String, callback: (Task) -> Unit) {
        if (events.containsKey(eventName)) {
            events[eventName]?.add(callback)
        } else {
            events[eventName] = arrayListOf(callback)
        }
    }

    fun trigger(eventName: String, task: Task) {
        if (events.containsKey(eventName)) {
            events[eventName]?.forEach {
                it.invoke(task)
            }
        }
    }
}
