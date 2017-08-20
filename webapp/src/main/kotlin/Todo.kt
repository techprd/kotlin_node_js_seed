import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import kotlin.browser.document

class Todo(var inputVal: String = "", val tasks: ArrayList<Task> = ArrayList<Task>()) {

    fun addTask(task: Task) {
        tasks.add(task)
    }

    fun getTask(index: Int): Task {
        return tasks[index]
    }

    fun getAllTasks(): ArrayList<Task> {
        return tasks
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
            it.stopPropagation()
            console.log(it)
        }
    }

    fun render(): HTMLDivElement {
        return document.create.div("row")
        {
            getForm("/", null, "col s12") {
                div("row") {
                    div("input-field col s6") {
                        i("material-icons prefix") {
                            +"border_color"
                        }
                        input {
                            id = "todo-input"
                            classes = listOf("validate").toSet()
                            type = InputType.text
                            name = "task_desc"
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
    }

}