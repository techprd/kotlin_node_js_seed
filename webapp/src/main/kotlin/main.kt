import org.w3c.dom.HTMLDivElement
import views.Todo
import kotlin.browser.document

fun main(args: Array<String>) {
    val formContainer = document.getElementById("formContainer") as HTMLDivElement
    Todo(formContainer).render()
}