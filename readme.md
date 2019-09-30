### INSTRUCTIONS

##### Local Docker Build
- $ sudo docker build -t expressjs .
- $ sudo docker run -d -p 8080:8080 expressjs

http://localhost:8080/ping

##### Dockerhub Build
- docker pull atifssg/nodejs 
- docker run -p 3000:80 -d atifssg/nodejs

http://localhost:8080/ping

