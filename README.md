# 353-Project

**Group Project Collab Part A**

**Links/Ports:**
- NodeJS Express Server/API - http://localhost:3030/
- React Client - http://localhost:3000/
- MySQL Admin Console - http://localhost:8000/
- MYSql Databse - http://localhost:3306/

**docker-compose commands:**
- docker-compose build      // builds from the docker-compose.yml file
- docker-compose up         // starts up all containers which is the react, mysql, nodeJS and admin console
- docker-compose down       // brings containers down/removes it

**To start docker bash session:**
- docker exec -it CONTAINER-NAME /bin/bash      // start a bash session in the respective container

**To enter the mysql container in a bash session**
- mysql -u root -p      // run this in the mysql container's bash session; it will prompt you for a password, this is 'admin' in my example

