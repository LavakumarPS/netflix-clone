pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git 'https://github.com/LavakumarPS/netflix-clone.git'
            }
        }
         stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
         }
         stage('Test'){
            steps{
                sh 'npm run test'
            }
         
         } 
         stage('Build'){
            steps{
                sh 'npm run build'
            }
         } 
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}