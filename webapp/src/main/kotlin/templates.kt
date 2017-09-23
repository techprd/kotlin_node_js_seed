import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import kotlinx.html.js.onKeyPressFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.js.Math

/**
 * generates a list of todo items
 */
fun DIV.listView(tasks: ArrayList<Task>, block: UL.() -> Unit) {
    ul {
        classes = setOf("collection with-header")
        li("collection-header cyan") {
            h5 { +"List of Tasks" }
        }
        tasks.forEach {
            li("collection-item avatar dismissable") {
                todoItem(it) {}
            }
        }
        block()
    }
}

fun LI.todoItem(task: Task, block: DIV.() -> Unit) {
    val randomId = randomId()
    div {
        i("material-icons circle green") {
            +"insert_chart"
        }
        span("title left-align") {
            +task.text
        }
        p {
            +"Personal"
        }
        div("secondary-content") {
            input {
                id = randomId
                classes = setOf("filled-in")
                type = InputType.checkBox
            }
            label {
                for_ = randomId
                +"Done"
                onClickFunction = markAsDone(task)
            }
        }
        block()
    }
}

fun markAsDone(task: Task): (Event) -> Unit {
    return {
        console.log(it)
    }
}

fun randomId(): String {
    var text = ""
    val possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (i in 0..4)
        text += possible[Math.floor(Math.random() * possible.length)]

    return text
}

/**
 * generate input box for todo tasks
 */
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

/**
 * Event that clear the value of input box on enter
 */
fun onInputViewKeyPress(): (KeyboardEvent) -> Unit {
    return {
        if (it.which == 13) {
            val input = it.currentTarget as HTMLInputElement
            input.value = ""
        }
    }
}
