package model

import kotlin.js.Json
import kotlin.js.json

data class Task(val id: String, val text: String, var isDone: Boolean = false, var isArchived: Boolean = false) {

    fun markAsDone() {
        isDone = true
    }

    fun archive() {
        isArchived = true
    }

    fun toJson(): Json {
        return json(
            "id" to id,
            "text" to text,
            "isDone" to isDone,
            "isArchived" to isArchived
        )
    }

    companion object {
        fun fromJson(it: Json): Task {
            return Task(
                id = it["id"] as String,
                text = it["text"] as String,
                isDone = it["isDone"] as Boolean,
                isArchived = it["isArchived"] as Boolean
            )
        }
    }
}
