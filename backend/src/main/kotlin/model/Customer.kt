package model

class Customer(val id: Int, val name: String, val email: String) {
    var isPreferred = false
    fun makePreferred() {
        isPreferred = true
    }
}