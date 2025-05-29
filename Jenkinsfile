pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch: 'main', url:'https://github.com/LavakumarPS/netflix-clone.git'
                sh 'echo "Checkout Stage is Success"'
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