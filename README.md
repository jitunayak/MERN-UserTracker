# How to run backend

## First install docker

```
docker pull mongo
docker pull mongo-express

docker run -p 27017:27017 --name mongodb mongo

docker start mongodb

docker run -it --rm -p 8081:8081 --link <ID_OF_MONGO_IMAGE>:mongo mongo-express
```

## To start backend server
 
```
npm install nodemon

nodemon server.js
```

# How to run fornted React Js

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

