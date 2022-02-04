plugins {
    kotlin("js")
}

group = "com.techprd"
version = "1.6.10"

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-js:1.6.10")
    implementation(project(":common"))

}

kotlin {
    js(IR) {
        nodejs {
            dependencies {
                implementation(npm("body-parser", "1.19.0"))
                implementation(npm("cookie-parser", "1.4.3"))
                implementation(npm("ejs", "2.5.6"))
                implementation(npm("express", "4.17.1"))
                implementation(npm("materialize-css", "1.0.0-rc.2"))
            }
        }
        binaries.executable()
    }
}
