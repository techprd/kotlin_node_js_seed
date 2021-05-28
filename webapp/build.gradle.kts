import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig

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
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.7.1")
    compile(project(":common"))
}

kotlin {
    target {
        browser {
            runTask {
                devServer = KotlinWebpackConfig.DevServer(
                        port = 8080,
                        contentBase = listOf("$buildDir/distributions"),
                        proxy = hashMapOf("/api" to "http://localhost:3000")
                )
            }
        }
    }
}
