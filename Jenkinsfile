@Library('Shared')_
pipeline{
    agent {label 'dev-server'}
    
    stages{
        stage("Clone Code"){
            steps{
                clone("https://github.com/sunnyshinde123/Myntra_JS_Project.git", "main")
            }
        }
        stage("Build & Test"){
            steps{
                dockerbuild("myntra-app", "latest")
            }
        }
        stage("Push Image to Docker Hub"){
            steps{
                dockerpush("dockerHubCred", "myntra-app", "latest")
            }
        }
        stage("Deploy"){
            steps{
                dockerRun("myntra-app", "latest")
                echo 'deployment ho gayi'
            }
        }
    }
}
