# Create React App

1. npx create-react-app frontend
2. npm start
3. remove unused files
4. copy index.html content to app.js
5. copy style.css content to index.css
6. replace class with className

# Create Rating and Product Component

1. create comonents/Rating.js
2. create div/rating
3. style div.rating, span and last span
4. create product component
5. use Rating component

# Build Product Screen

1. Install react-router-dom
2. Use BrowswerRouter and Route for Home Screen
3. Create HomeScreen.js
4. Add product list code there
5. Create ProductScreen.js
6. Add new Route from product details to App.js
7. Create 3 columns for product image, info and action

# Create Node.JS Server

1. run npm init in root folder
2. Update package.json set type: module
3. Add .js to imports
4. npm install express
5. create server.js
6. add start command as node backend/server.js
7. require express
8. create route for / return backend is ready
9. move products.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start

# Manage State By Reducer Hook

1. define reducer
2. update fetch data
3. get state from useReducer

# Add bootstrap UI Framework

1. npm install react-bootstrap bootstrap
2. update App.js

# Create Loading and Message Component

1. create loading component
2. use spinner component
3. craete message component
4. create utils.js to define getError fuction

# Create React Context For Add Item To Cart

1. Create React Context
2. define reducer
3. create store provider
4. implement add to cart button click handler

# Complete Add to Cart

1. check exist item in the cart
2. check count in stock in backend

# Create Cart Screen

1. create 2 columns
2. display items list
3. create action column

# Complete Cart Screen

1. click handler for inc/dec item
2. click handler for remove item
3. click handler for checkout

# Create Signin Screen

1. create sign in form
2. add email and password
3. add signin button

# Connect To MongoDB Database

1. create atlas monogodb database
2. install local mongodb database
3. npm install mongoose
4. connect to mongodb database

# Seed Sample Data

1. create Product model
2. Create seed route
3. use route in server.js
4. seed sample product

# Seed Sample Users

1. create user model
2. seed sample users
3. create user routes

# Create Signin Backend API

1. create signin api
2. npm install jsonwebtoken
3. define generateToken

# Complete Signin Screen

1. handle submit action
2. save token in store and local storage
3. show user name in header'

# Create Shipping Screen

1. create form inputs
2. handle save shipping address
3. add checkout wizard bar

# Create Sing Up Screen

1. create input forms
2. handle submit
3. create backend api

# Implement Select Payment Method Screen

1. create input forms
2. handle submit

# Create Place Order Screen

1. show cart items, payment and address

# Implement Place Order Action

1. handle place order action
2. create order create api

# Create Order Screen

1.  create backend api for order/:id
2.  fetch order api in frontend
3.  show order information in 2 columns

# Pay Order by PayPal

1.  generate paypal client id
2.  create api to return client id
3.  install react-paypal-js
4.  use PayPalScripteProvider in index.js
5.  use PayPalPalScriptReducer in Order Screen
6.  implement loadPaypalScripte function
7.  render paypal button
8.  implement onApprove payment function
9.  create pay order api in backend

# Display Order History

1.  create order history screen
2.  create order history api
3.  use api in the frontend

# Create Profile Screen

1.  get user info from context
2.  show user information
3.  create user update api
4.  update user info

# Add Sidebar and Search Box

1.  add sidebar
2.  add search box

# Create Search Screen

1. show filters
2. create api for searching products
3. display results
