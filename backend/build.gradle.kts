plugins {
    id("org.jetbrains.kotlin.js")
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
    compile(project(":common"))
}

kotlin.target.nodejs { }
