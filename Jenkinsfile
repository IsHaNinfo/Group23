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

        stage('Check Allure Results Directory') {
            steps {
                script {
                    echo "Checking allure-results directory..."
                    // Create the allure-results directory if it doesn't exist
                    if (!fileExists("${env.WORKSPACE}\\allure-results")) {
                        echo "Creating allure-results directory..."
                        bat "mkdir ${env.WORKSPACE}\\allure-results"
                    } else {
                        echo "allure-results directory exists."
                    }
                }
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

        stage('Check Allure Results After Testing') {
            steps {
                script {
                    echo "Checking allure-results directory after test execution..."
                    // List contents of the allure-results directory to confirm the results files are there
                    bat "dir ${env.WORKSPACE}\\allure-results"
                    if (!fileExists("${env.WORKSPACE}\\allure-results")) {
                        error("allure-results directory does not exist or is empty after test execution.")
                    }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    echo "Generating Allure report using custom Allure command..."
                    // Run the Allure generate command with your specified path
                    bat "\"C:\\Users\\ISHAN PC\\allure-2.32.0\\allure-2.32.0\\bin\\allure.bat\" generate -c -o ${env.WORKSPACE}\\allure-report ${env.WORKSPACE}\\allure-results"
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
