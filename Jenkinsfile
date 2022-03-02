pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('test') {

      steps {
        sh 'npm installl'
        sh "npm run cy:run"
      }
    }
  }
}
