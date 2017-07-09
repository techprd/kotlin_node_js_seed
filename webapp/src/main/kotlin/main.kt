import org.w3c.dom.*
import kotlin.browser.*
import kotlin.js.console

fun main(args: Array<String>) {
    console.info("main function")
    val header = document.getElementById("message") as HTMLHeadingElement
    header.innerText = "Customer Information"
}