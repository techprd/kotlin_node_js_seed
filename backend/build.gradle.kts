plugins {
    id("org.jetbrains.kotlin.js")
}

group = "com.techprd"
version = "1.9.0"

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    implementation(kotlin("stdlib-js"))
    implementation(project(":common"))
}

kotlin {
    js {
        nodejs {
            dependencies {
                implementation(npm("body-parser", "1.20.2"))
                implementation(npm("cookie-parser", "1.4.6"))
                implementation(npm("ejs", "3.1.9"))
                implementation(npm("express", "4.18.2"))
                implementation(npm("materialize-css", "1.0.0"))
            }
        }
        binaries.executable()
    }
}
