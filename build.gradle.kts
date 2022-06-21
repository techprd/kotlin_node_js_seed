plugins {
    id("org.jetbrains.kotlin.js") version "1.7.0"
}

group = "com.techprd"
version = "1.7.0"

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
}

kotlin {
    js(IR) {
        browser()
        nodejs()
    }
}

rootProject.plugins.withType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin> {
    rootProject.the<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>().versions.webpackCli.version =
        "4.10.0"
}
