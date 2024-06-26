# Getting Started with My Shop App

The My Shop App uses **https://fakestoreapi.com** to get the product information and pull a list of projects

## My Shop App consists of 3 Pages

### Products List Page

The products list page pulls a list of available products from the API and has the following functionality

-   Filtering By Categories
-   Product List Page
-   Add a Product to the Cart
-   View more details about a Product

### Product View Page

This is an individual Product view page when a user clicks from that Products List page it takes the user to a Product view page and presents the user with more information

The Product view page allows a user to

-   View A individual Product
-   Add that Product to the Cart
-   Go Back to the Product List Page

### Cart List Page

The Cart list page shows a user all the Products that have been added to the Cart, as well as the quantity of items ordered The Cart page allows for a user to

-   Add more items of a product
-   Reduce the items of a product
-   Remove a Product completely from the Cart

# Getting Start

To Get started on the My Shop App you need the following commands

```
npm install
npm start
```

If you wish to build the project you can run the following commands

```
npm run build
serve -s build
```

# Additional Project Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## To Run a default project

You are able to serve a local environment, this will serve on http://localhost:3000/ and mimic a live server

```
npm install -g serve
serve -s build

```
