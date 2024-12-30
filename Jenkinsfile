pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/TestCases', description: "Enter the script path that you want to execute")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser to execute")
    }

    environment {
        TERM = 'xterm'
        PROJECT_DIR = 'H:\\Group23\\Cypress_Cucumber_Test' // Base project directory
        ALLURE_RESULTS_DIR = 'allure-results'             // Allure results directory
        ALLURE_REPORT_DIR = 'allure-report'               // Allure report directory
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
                    dir("${env.PROJECT_DIR}") {
                        bat "npm install"
                    }

                    echo "Installing Cypress binary..."
                    dir("${env.PROJECT_DIR}") {
                        bat "npx cypress install --force"
                    }

                    echo "Running Cypress tests with Allure reporter..."
                    dir("${env.PROJECT_DIR}") {
                        // Catch test failures and allow the pipeline to continue
                        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                            bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mocha-allure-reporter --reporter-options resultsDir=${env.ALLURE_RESULTS_DIR}"

                        }
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    echo "Generating Allure report..."
                    dir("${env.PROJECT_DIR}") {
                    bat "allure generate ${env.ALLURE_RESULTS_DIR} --clean -o ${env.ALLURE_REPORT_DIR}"
                    }
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    results: [[path: "${env.PROJECT_DIR}\\${env.ALLURE_RESULTS_DIR}"]],
                    reportBuildPolicy: 'ALWAYS'
                ])
            }
        }
    }

    post {
        always {
            echo "Archiving Allure report artifacts..."
            archiveArtifacts artifacts: "${env.PROJECT_DIR}\\${env.ALLURE_REPORT_DIR}\\**", allowEmptyArchive: true
            cleanWs()
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
