pipeline{
    agent {label 'dev-server'}
    
    stages{
        stage("Clone Code"){
            steps{
                git url: "https://github.com/sunnyshinde123/Myntra_JS_Project.git", branch: "main"
                echo "Repo clone successfully"
            }
        }
        stage("Build & Test"){
            steps{
                sh "docker build -t myntra-app ."
                echo "Image Build Successfully"
            }
        }
        stage("Push Image to Docker Hub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId:"dockerHubCred",
                    usernameVariable:"dockerUser",
                    passwordVariable:"dockerPass"
                    )]){
                        sh "echo $dockerPass | docker login -u $dockerUser --password-stdin"
                        sh "docker image tag myntra-app:latest $dockerUser/myntra-app"
                        sh "docker push $dockerUser/myntra-app:latest"
                    }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker run -d -p 8080:8080 myntra-app:latest"
                echo 'deployment ho gayi'
            }
        }
    }
}
