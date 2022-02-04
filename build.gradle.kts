plugins {
    kotlin("js") version "1.6.10"
}

group = "com.techprd"
version = "1.6.10"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
}

kotlin {
    js(IR) {
        browser()
        nodejs()
    }
}
