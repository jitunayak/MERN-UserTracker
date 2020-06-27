# How to run backed

## First install docker

```
docker pull mongo
docker pull mongo-express

docker run -p 27017:27017 --name mongodb mongo

docker start mongodb

docker run -it --rm -p 8081:8081 --link <ID_OF_MONGO_IMAGE>:mongo mongo-express
```

## To start backed server
 
```
RUN nodemon server.js
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
