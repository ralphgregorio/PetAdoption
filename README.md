# 353-Project

**Group Project Collab Part A**

**Links/Ports:**
- NodeJS Express Server/API - `http://localhost:3030/`
- React Client - `http://localhost:3000/`
- MySQL Admin Console - `http://localhost:8000/`
- MYSql Databse - `http://localhost:3306/`

**API EndPoints:**
- **Root Link** | `http://localhost:3030/`
- **POST** | `/api/createStaff` | Creates Staff in DB | Body Req `fname=&lname=&username=&pass=`
- **POST** | `/api/createUser` | Creates User in DB | Body Req `fname=&lname=&email=&petID=`
- **POST** | `/api/createPet` | Creates Pet in DB | Body Req `pname=&age=&desc=&breed=&url=&adopted=`
- **GET** | `/api/get/{tableName}` | Sends JSON of all data in specified table
- **GET** | `/api/get/{tableName}?column={column}&orderby={asc/desc}&adopted={true/false}` | Sends JSON of all data in specified table with filter applied
- **EXAMPLE GET** | `/api/get/pet?column=pet_name&orderby=asc&adopted=true` | Sends JSON of pets ordered in ascending order by pet name, and will only show adopted pets
- **EXAMPLE GET** | `/api/get/user?column=timestamp&orderby=desc` | Sends JSON of all data of users in descending order ordered by timestamp
- **GET** | `/api/getParents` | Sends JSON of all users that has adopted a pet joining user and pet tables together

**docker-compose commands:**
- docker-compose build      // builds from the docker-compose.yml file
- docker-compose up         // starts up all containers which is the react, mysql, nodeJS and admin console
- docker-compose down       // brings containers down/removes it

**To start docker bash session:**
- docker exec -it CONTAINER-NAME /bin/bash      // start a bash session in the respective container

**To enter the mysql container in a bash session**
- mysql -u root -p      // run this in the mysql container's bash session; it will prompt you for a password, this is 'admin' in my example

