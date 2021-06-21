plugins {
    id("org.jetbrains.kotlin.js") version "1.5.10"
}

group = "com.techprd"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js {
        browser()
        nodejs()
    }
}
