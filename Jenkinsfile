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
                    bat "cd H:\\Group23\\Cypress_Cucumber_Test\\&& npm install"  // Change to project directory and install dependencies

                    echo "Running Cypress tests..."
                    bat "cd H:\\Group23\\Cypress_Cucumber_Test\\&& npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
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
                def reportDir = 'H:\\Group23\\Cypress_Cucumber_Test\\cypress\\report'  // Ensure this path is correct for your Cypress report
                if (fileExists(reportDir)) {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: reportDir,
                        reportFiles: 'index.html',
                        reportName: 'HTML Report',
                        reportTitles: '',
                        useWrapperFileDirectly: true
                    ])
                } else {
                    echo "Cypress report directory does not exist."
                }
            }
        }
    }
}
