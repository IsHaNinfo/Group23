pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/TestCases', description: "Enter the script path that you want to execute")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser to execute")
    }

    environment {
        TERM = 'xterm'
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
            dir('H:\\Group23\\Cypress_Cucumber_Test') {  // Change to the project directory
                bat "npm install"
            }

            echo "Installing Cypress binary..."
            dir('H:\\Group23\\Cypress_Cucumber_Test') {
                bat "npx cypress install"
            }

            echo "Running Cypress tests..."
            dir('H:\\Group23\\Cypress_Cucumber_Test') {  // Ensure tests run from the correct directory
                bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
            }
        }
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploying the application"
            }
        }
    }

    post {
        always {
            echo "Generating Cypress report..."
            script {
                def reportDir = 'H:\\Group23\\Cypress_Cucumber_Test\\cypress'
                if (fileExists(reportDir)) {
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
                } else {
                    echo "Cypress report directory does not exist."
                }
            }
        }
    }
}
