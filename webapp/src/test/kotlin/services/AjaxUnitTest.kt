package services

import io.kotest.matchers.shouldBe
import kotlin.test.Test
import kotlin.test.BeforeTest

class AjaxUnitTest {

    lateinit var ajax: Ajax

    @BeforeTest
    fun beforeTest() {
        ajax = Ajax()
    }

    @Test
    fun test() {
        ajax.get("/api/taskss") {
            println("error")
            it.response shouldBe "Hello World"
        }
    }
}


