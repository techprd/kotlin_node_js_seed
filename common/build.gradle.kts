plugins {
    id("org.jetbrains.kotlin.js")
}

group = "com.techprd"
version = "1.9.0"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib-js"))
}

kotlin {
    js {
        browser()
        nodejs()
    }
}
