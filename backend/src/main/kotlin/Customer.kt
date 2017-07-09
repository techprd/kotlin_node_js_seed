/**
 * Created by techprd on 3/6/17.
 */

class Customer(val id: Int, val name: String, val email: String) {
    var isPreferred = false
    fun makePreferred() {
        isPreferred = true
    }
}