import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLHeadingElement
import kotlin.browser.document

fun main(args: Array<String>) {
    val header = document.getElementById("message") as HTMLHeadingElement
    val formContainer = document.getElementById("formContainer") as HTMLDivElement
    Todo(formContainer).render()
}