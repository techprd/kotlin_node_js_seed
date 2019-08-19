package utils

import kotlin.math.floor
import kotlin.random.Random

object Utils {
    fun randomId(): String {
        var text = ""
        val possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (i in 0..4)
            text += possible[floor(Random.nextDouble() * possible.length).toInt()]

        return text
    }

    fun normalizePort(arg: Int): Int {
        if (arg >= 0) {
            // port number
            return arg
        }
        return 3000
    }
}
