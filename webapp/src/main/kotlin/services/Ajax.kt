package services

import model.Task
import org.w3c.xhr.*

class Ajax {

    private var xhttp = XMLHttpRequest()
    private val okStatus: Short = 200

    fun get(url: String, callback: (XMLHttpRequest) -> Unit) {
        xhttp.open(
            method = "GET",
            url = url,
            async = true
        )
        xhttp.onreadystatechange = {
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == okStatus) {
                callback(xhttp)
            }
        }

        xhttp.send()
    }

    fun post(url: String, task: Task, callback: (XMLHttpRequest) -> Unit) {
        xhttp.open(
            method = "POST",
            url = url,
            async = true
        )
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = {
            if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == okStatus) {
                callback(xhttp)
            }
        }

        xhttp.send(JSON.stringify(task))
    }

}
