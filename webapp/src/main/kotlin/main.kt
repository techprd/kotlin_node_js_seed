import org.w3c.dom.HTMLDivElement
import views.Todo
import kotlinx.browser.document

fun main() {
    val formContainer = document.getElementById("formContainer") as HTMLDivElement
    Todo(formContainer).render()
}
