import kotlinx.html.*
import kotlinx.html.js.onKeyPressFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent

fun DIV.listView(tasks: ArrayList<Task>, block: UL.() -> Unit) {
    ul {
        classes = setOf("row  with-header")
        li("collection-header") {
            h5 { +"List of Tasks" }
        }
        tasks.forEach {
            li("collection-item") {
                +it.text
            }
        }
        block()
    }
}

@Suppress("UNCHECKED_CAST")
fun DIV.inputView(block: INPUT.() -> Unit) {
    input {
        id = "todo-input"
        classes = setOf("validate")
        type = InputType.text
        name = "task_desc"
        autoFocus = true
        block()
        onKeyPressFunction = onInputViewKeyPress() as (Event) -> Unit
    }
}

fun onInputViewKeyPress(): (KeyboardEvent) -> Unit {
    return {
        if (it.which == 13) {
            val input = it.currentTarget as HTMLInputElement
            input.value = ""
        }
    }
}
