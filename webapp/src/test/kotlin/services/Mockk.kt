package services

// implement a mockk class that implements the interface of any class
class MockkImp(private val clazz: JsClass<*>) : Mockk {
    override fun mockk(vararg args: Any?): Any? {
        val method = clazz.asDynamic().prototype[args[0] as String]
        println("method: $method")
        return clazz.asDynamic().constructor
    }
}

interface Mockk {
    fun mockk(vararg args: Any?): Any?
}
