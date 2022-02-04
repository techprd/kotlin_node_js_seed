import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig

plugins {
    kotlin("js")
}

group = "com.techprd"
version = "1.6.10"

repositories {
    mavenCentral()
    mavenLocal()
    jcenter()
    maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-js:1.6.10")
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.7.3")
    implementation(project(":common"))

    implementation("org.jetbrains.kotlin:kotlin-reflect:1.6.10")
    testImplementation("org.jetbrains.kotlin:kotlin-test-js:1.6.10")
    testImplementation("io.kotest:kotest-framework-api:5.1.0")
    testImplementation("io.kotest:kotest-assertions-js:4.0.7")
    testImplementation("org.jetbrains.kotlin:kotlin-test:1.6.0")

}

kotlin {
    js(IR) {
        browser {
            webpackTask {
                cssSupport.enabled = true
            }

            runTask {
                cssSupport.enabled = true
                devServer = KotlinWebpackConfig.DevServer(
                    static = mutableListOf("$buildDir/distributions"),
                    proxy = hashMapOf("/api" to "http://localhost:3000")
                )
            }

            testTask {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport.enabled = true
                }
            }
        }
        binaries.executable()
    }
}

