// comment
pipeline {
 agent any
 stages {
    stage('Checkout-Proyecto'){  
    	 steps{
            echo 'Revisando repositorio del Proyecto'
			git branch: 'master', poll: true, url: 'https://github.com/edeleon2408/angular-docker.git'
         }        	
    }
    stage('Build-Image-Docker'){     
    	 steps{
            echo 'Construyendo Imagen Docker del Proyecto'            
			bat 'docker build -f docker/Dockerfile -t angular-docker .'
				
	   }        	
    }
    /*stage('Deploy-Image-Docker-Hub'){     
    	 steps{    	 
            echo 'Desplegando Imagen docker Hub'
            //edema28 and edema0890 ${env.BUILD_NUMBER}
            script {
            	def app = docker.build("edema28/prueba-jenkins-docker-war")
				docker.withRegistry('https://registry.hub.docker.com', 'jenkins-docker-hub') {
            	app.push("${env.BUILD_NUMBER}")
            	app.push("latest")
            }
        }
	   }        	
    }*/
    stage('Build-Image-Container-Docker'){     
    	 steps{
            echo 'Construyendo Imagen y Contenedor Docker del Proyecto'	
            bat """
                   cd docker
            	   docker-compose up -d
                   docker rmi $(docker images -f "dangling=true" -q --no-trunc)
            	"""            
	   }        	
    }//fin stage
    
  }//fin stages
  
  post {
        success {
            echo 'I will success!'
            mail bcc: '', 
            body: "<b>Notificación CI</b><br><br>Estimado Usuario, El proceso CI se ha ejecutado de manera satisfactoria.<br><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}",
            cc: '', 
            charset: 'UTF-8', 
            from: '', 
            mimeType: 'text/html', 
            replyTo: '', 
            subject: "SUCCESS CI: Project name -> ${env.JOB_NAME}", 
            to: "edeleon2408@gmail.com";  
                     
        }
        failure {
        	echo 'I will success!'
            mail bcc: '', 
            body: "<b>Notificación CI</b><br><br>Estimado Usuario, El proceso CI ha fallado, por favor notificar al area administrativa del proceso.<br><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}",
            cc: '', 
            charset: 'UTF-8', 
            from: '', 
            mimeType: 'text/html', 
            replyTo: '', 
            subject: "FAILURED CI: Project name -> ${env.JOB_NAME}", 
            to: "edeleon2408@gmail.com";
        }
    }//fin post
}
