plugins {
    kotlin("js")
}

group = "com.techprd"
version = "1.7.0"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-js:1.6.10")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-common:1.6.10")
}

kotlin {
    js(IR) {
        browser()
        nodejs()
    }
}
