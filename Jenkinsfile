pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/TestCases', description: "Enter the script path that you want to execute")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser to execute")
    }

    environment {
        TERM = 'xterm'
        PROJECT_DIR = "H:\\Group23\\Cypress_Cucumber_Test"
        ALLURE_RESULTS_DIR = "allure-results"
        ALLURE_REPORT_DIR = "allure-report"
        WORKSPACE = "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\hh\\Cypress_Cucumber_Test"
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
            }
        }

        stage('Testing') {
            steps {
                script {
                    echo "Installing dependencies..."
                    dir(env.PROJECT_DIR) {
                        bat "npm install"
                    }

                    echo "Installing Cypress binary..."
                    dir(env.PROJECT_DIR) {
                        bat "npx cypress install --force"
                    }

                    echo "Running Cypress tests with Allure reporter..."
                    dir(env.PROJECT_DIR) {
                        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                        bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mocha-allure-reporter --reporter-options resultsDir=${env.WORKSPACE}\\allure-results"
                        }
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    echo "Checking allure-results directory..."
                    if (!fileExists("${env.WORKSPACE}\\allure-results")) {
                        error("allure-results directory does not exist or is empty.")
                    }
                    echo "Generating Allure report..."
                    bat "allure generate ${env.WORKSPACE}\\allure-results -o ${env.WORKSPACE}\\allure-report --clean"
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                script {
                    echo "Publishing Allure report..."
                    allure([
                        results: [[path: "${env.WORKSPACE}\\allure-results"]],
                        reportBuildPolicy: 'ALWAYS'
                    ])
                }
            }
        }
    }

    post {
     
             always {
        archiveArtifacts artifacts: "${Cypress_Cucumber_Test\\allure-report}", allowEmptyArchive: true
            }
        

        success {
            echo "Build completed successfully!"
        }

        unstable {
            echo "Build completed with test failures. Check Allure report for details."
        }

        failure {
            echo "Build failed! Check the logs for more details."
        }
    }
}
