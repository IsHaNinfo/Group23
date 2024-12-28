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
                    bat "npm install"

                    echo "Running Cypress tests..."
                    bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
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
            publishHTML([ 
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: 'cypress/report', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: '', 
                useWrapperFileDirectly: true 
            ])
        }
    }
}
