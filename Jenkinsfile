@Library('JenkinsShared')_
pipeline {
    agent { label 'test'} 

    stages {
        stage("Clone Code") {
            steps {
                // Direct use of a shared library function
                echo "-----${env.BRANCH_NAME}---------"
                clone("https://github.com/sunnyshinde123/Myntra_JS_Project.git", env.BRANCH_NAME)
            }
        }
        
        stage("Build & Test") {
            when {
                branch 'main' // This stage runs only for the main branch
            }
            steps {
                echo "Building and testing the code on the main branch: ${env.BRANCH_NAME}"
                dockerbuild("myntra-app", "latest")
            }
        }
        
        stage("Push Image to Docker Hub") {
            when {
                branch 'main' // This stage runs only for the main branch
            }
            steps {
                echo "Pushing Docker image to Docker Hub for the main branch: ${env.BRANCH_NAME}"
                dockerpush("cred", "myntra-app", "latest")
            }
        }
        
        stage("Deploy") {
            when {
                branch 'dev' // This stage runs only for the dev branch
            }
            steps {
                echo "Deploying the application from the dev branch: ${env.BRANCH_NAME}"
                dockerRun("myntra-app", "latest")
                echo "Deployment ho gayi"
            }
        }
    }
}
