plugins {
    id("org.jetbrains.kotlin.js") version "1.3.71"
}

group = "com.techprd"
version = "1.0.0"

repositories {
    mavenCentral()
    mavenLocal()
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-js"))
}

kotlin.target.browser {
}
kotlin.target.nodejs {
}
