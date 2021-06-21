plugins {
    id("org.jetbrains.kotlin.js")
}

group = "com.techprd"
version = "1.5.10"

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
