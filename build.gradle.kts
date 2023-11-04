plugins {
    id("org.jetbrains.kotlin.js") version "1.9.0"
}

group = "com.techprd"
version = "1.9.0"

repositories {
    mavenCentral()
}

kotlin {
    js {
        browser()
        nodejs()
    }
}
