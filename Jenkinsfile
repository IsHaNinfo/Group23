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
                            bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC} --reporter mocha-allure-reporter --reporter-options resultsDir=${ALLURE_RESULTS_DIR}"
                        }
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    echo "Generating Allure report..."
                    dir(env.PROJECT_DIR) {
                        if (!fileExists("${ALLURE_RESULTS_DIR}")) {
                            error("The directory '${ALLURE_RESULTS_DIR}' does not exist or is empty.")
                        }
                        bat "allure generate ${ALLURE_RESULTS_DIR} -o ${ALLURE_REPORT_DIR} --clean"
                    }
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                script {
                    echo "Publishing Allure report..."
                    allure([
                        results: [[path: "${ALLURE_RESULTS_DIR}"]],
                        reportBuildPolicy: 'ALWAYS'
                    ])
                }
            }
        }
    }

    post {
        always {
            script {
                echo "Archiving Allure report artifacts..."
                dir(env.PROJECT_DIR) {
                    archiveArtifacts artifacts: "${ALLURE_REPORT_DIR}/**", allowEmptyArchive: true
                }
                cleanWs()
            }
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
