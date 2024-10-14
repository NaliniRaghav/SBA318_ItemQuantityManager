Item Manager Application

Project Description

The Item Manager is a Node.js and Express application that allows users to manage items and their quantities. Additionally, it manages related categories and suppliers. This project demonstrates basic CRUD operations using a RESTful API, a template engine for rendering views, and Express middleware.

Requirements

Node.js and Express: The application is built using Node.js and Express
  
CRUD Operations (Items): 
 Create, Read, Update, Delete** (CRUD) functionality for items is implemented via the '/items' routes.  
 Item data is stored in memory inside JavaScript files located in the 'data' folder (instead of using a database).

 Custom Middleware:
  Logging Middleware: Logs each incoming request, including the method and URL, fulfilling the requirement for custom middleware.
  Body Parsing Middleware: Express's 'express.json()' and 'express.urlencoded()' middleware are used to parse incoming request bodies.

 Additional Data Categories:
  Categories and Suppliers have their own routes and are managed alongside items.

  Template Engine:
  Pug Template Engine is used to render views for the user. The views include pages to display items, categories, and suppliers, as well as forms to add new entries.

 GITHUB link:  https://github.com/NaliniRaghav/SBA318-ItemManager

 Update .env file with PORT=4000
  
 RUN
  
Go to cd SBA318-ItemManager
Start the Server
node index.js

View the Application in Browser
Open your browser and go to http://localhost:4000:

You should see the home page.
Navigate to other sections:

View items: http://localhost:4000/items
View suppliers: http://localhost:4000/suppliers
View categories: http://localhost:4000/categories

Test in Postman (for JSON Responses)
To get JSON responses instead of HTML views, you'll need to make requests via Postman with the correct headers.

Get All Items (JSON):

Method: GET
URL: http://localhost:4000/items
Headers:
Key: Accept
Value: application/json
Expected Response: JSON array of all items.
Add New Item (POST JSON):

Method: POST
URL: http://localhost:4000/items
Headers:
Key: Content-Type
Value: application/json
Body:
json
 
{
  "name": "Oranges",
  "quantity": 50,
  "category": 1,
  "supplier": 1
}
Expected Response: Confirmation that the item was added successfully.
Update an Item (POST JSON):

Method: POST
URL: http://localhost:4000/items/:id (Replace :id with the item ID, e.g., http://localhost:4000/items/1)
Headers:
Key: Content-Type
Value: application/json
Body:
json

{
  "name": "Updated Oranges",
  "quantity": 60,
  "category": 1,
  "supplier": 1
}
Expected Response: Confirmation that the item was updated successfully.
Delete an Item (POST JSON):

Method: POST
URL: http://localhost:4000/items/delete/:id (Replace :id with the item ID, e.g., http://localhost:4000/items/delete/1)
 
Troubleshooting
Check the Console Logs:

If you encounter any issues, check your terminal for errors or logs that might indicate where the problem is.
Ensure Postman Headers are Correct:

For GET requests, ensure you have the header Accept: application/json.
For POST requests, ensure you have the header Content-Type: application/json and the body is formatted correctly in JSON.
Check Route Logic:

Ensure the route logic checks for the Accept header and responds with JSON when it's set to application/json in Postman.

Test Other Endpoints (Suppliers, Categories)
You can also test other API routes similarly:

Get All Suppliers (JSON):
Method: GET
URL: http://localhost:4000/suppliers
Headers: Accept: application/json
Expected Response: JSON array of suppliers.
Get All Categories (JSON):
Method: GET
URL: http://localhost:4000/categories
Headers: Accept: application/json
Expected Response: JSON array of categories.
Summary of Postman Links
Here are the main Postman links:

GET: http://localhost:4000/items (with Accept: application/json)
POST: http://localhost:4000/items (for adding a new item)
POST: http://localhost:4000/items/:id (for updating an item)
POST: http://localhost:4000/items/delete/:id (for deleting an item)
GET: http://localhost:4000/suppliers (for suppliers)
GET: http://localhost:4000/categories (for categories)

