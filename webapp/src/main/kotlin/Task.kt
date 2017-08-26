class Task(desc: String) {
    var isArchived = false
    var text = desc

    fun archive() {
        isArchived = true
    }
}