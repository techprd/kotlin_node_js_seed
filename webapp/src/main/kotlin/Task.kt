class Task(desc: String) {
    var isArchived = false

    fun archive() {
        isArchived = true
    }
}