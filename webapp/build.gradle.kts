import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig

plugins {
    id("org.jetbrains.kotlin.js")
}

group = "com.techprd"
version = "1.9.0"

repositories {
    mavenCentral()
    mavenLocal()
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-js"))
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.9.1")
    implementation(project(":common"))
}

kotlin {
    js {
        browser {
            webpackTask(Action {
                cssSupport {
                    enabled.set(true)
                }
            })

            runTask(Action {
                devServer = KotlinWebpackConfig.DevServer(
                    static = mutableListOf("$buildDir/processedResources/js/main"),
                    proxy = hashMapOf("/api" to "http://localhost:3000")
                )
            })

            testTask(Action {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport {
                        enabled.set(true)
                    }
                }
            })
        }
        binaries.executable()
    }
}

