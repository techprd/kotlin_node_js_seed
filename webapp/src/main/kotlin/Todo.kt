import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import kotlin.browser.document

class Todo(var formContainer: HTMLDivElement) {

    var inputVal: String = ""
    var storage: ArrayList<Task> = arrayListOf()

    init {
        // populate the storage with some dummy data
        arrayOf("Buy Milk", "Check Post office", "Call John").forEach {
            storage.add(Task(desc = it))
        }
    }

    // TODO
    private fun registerEvents() {
    }

    fun addTask(task: Task) {
        storage.add(task)
    }

    fun getTask(index: Int): Task {
        return storage.get(index)
    }

    fun onInput(): (Event) -> Unit {
        return {
            val input = it.currentTarget as HTMLInputElement
            inputVal = input.value
        }
    }

    fun onSubmit(): (Event) -> Unit {
        return {
            it.preventDefault()
            val task = Task(desc = inputVal)
            addTask(task)
            document.getElementById("task-collection")?.append(
                    document.create.li("collection-item avatar dismissable") {
                        todoItem(task) {

                        }
                    }
            )
        }
    }

    fun render() {
        formContainer.appendChild(getForm())
    }

    fun getForm(): HTMLDivElement {
        return document.create.div("row")
        {
            div("col l8 m12 s12") {
                div("card collection") {
                    div("card-content") {
                        span("card-title") {
                            +"ToDo Sample app"
                        }
                        form("/", null) {
                            div("row") {
                                div("input-field") {
                                    i("material-icons prefix") {
                                        +"border_color"
                                    }
                                    inputView {
                                        onInputFunction = onInput()
                                    }
                                    label("active") {
                                        for_ = "icon_prefix"
                                        +"Todo Task"
                                    }
                                }
                            }
                            onSubmitFunction = onSubmit()
                        }
                    }
                    div("card-action") {
                        listView(storage) {
                            id = "task-collection"
                        }
                    }
                }
            }

        }
    }
}