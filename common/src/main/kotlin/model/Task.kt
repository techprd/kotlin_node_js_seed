package model

data class Task(val id: String, val text: String) {
    var isArchived = false
    var isDone = false

    fun markAsDone() {
        isDone = true
    }

    fun archive() {
        isArchived = true
    }
}
