pipeline {
    agent any

    tools {
        nodejs 'nodejs-20'
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
    }

    stages {
        stage('Install Vercel CLI') {
            steps {
                sh 'npm install -g vercel'
            }
        }

        stage('Pull Vercel Config') {
            steps {
                sh 'vercel pull --yes --token=$VERCEL_TOKEN'
            }
        }

        stage('Build') {
            steps {
                sh 'vercel build --prod --token=$VERCEL_TOKEN'
            }
        }

        stage('Deploy') {
            steps {
                sh 'vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN'
            }
        }
    }
}
