## First install docker

```
docker pull mongo
docker pull mongo-express

docker run -p 27017:27017 --name mongodb mongo

docker start mongodb

docker run -it --rm -p 8081:8081 --link <ID_OF_MONGO_IMAGE>:mongo mongo-express```
