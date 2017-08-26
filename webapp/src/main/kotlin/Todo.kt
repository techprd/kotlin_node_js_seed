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
        this.registerEvents()
    }

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
                    document.create.li("collection-item") {
                        +task.text
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
            form("/", null) {
                classes = setOf("col s12")
                div("row") {
                    div("input-field col s6") {
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
            listView(storage) {
                id = "task-collection"
            }
        }
    }
}