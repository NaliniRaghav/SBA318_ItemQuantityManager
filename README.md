ItemQuantity Manager Application

Project Description

The Item Qty Manager is a Node.js and Express application that allows users to manage items and their quantities. Additionally, it manages related categories and suppliers. This project demonstrates basic CRUD operations using a RESTful API, a template engine for rendering views, and Express middleware.

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

 GITHUB link:  https://github.com/NaliniRaghav/SBA318_ItemQuantityManager

 Update .env file with PORT=4000
  
 RUN
  
Go to cd  SBA318_ItemQuantityManager
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

1. GET All Items
Method: GET
URL: http://localhost:4000/items
Description: Fetches the list of all items.
Headers (optional for JSON response):json  {  "Accept": "application/json"}

2. GET Add New Item Form
Method: GET
URL: http://localhost:4000/items/new
Description: Returns a form to add a new item.  

3. POST Create a New Item
Method: POST
URL: http://localhost:4000/items
Description: Adds a new item to the list.
Body (JSON):json
{
  "name": "New Item",
  "quantity": 10,
  "category": "Category1",
  "supplier": "Supplier1"
}

4. GET Edit Item Form
Method: GET
URL: http://localhost:4000/items/edit/:id
Description: Fetches a form to edit an item by ID. Replace :id with the actual item ID (e.g., http://localhost:4000/items/edit/1).

5. PUT Update an Item
Method: PUT
URL: http://localhost:4000/items/:id
Description: Updates an existing item by ID.
Body (JSON):json
{
  "name": "Updated Item",
  "quantity": 20,
  "category": "Category2",
  "supplier": "Supplier2"
}
  
Example: http://localhost:4000/items/1

6. DELETE an Item
Method: DELETE
URL: http://localhost:4000/items/:id
Description: Deletes an item by ID.
Example: http://localhost:4000/items/1

 
 
For GET requests, ensure you have the header Accept: application/json.
For POST requests, ensure you have the header Accept: application/json and the body is formatted correctly in JSON.
 

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
 

 Future Enhancements:

Search, Filter, and Sort: Implement search, filtering by category or supplier, and sorting by name, quantity, or other attributes.
Pagination: Add pagination to handle large item lists, improving performance and usability.
Item Images: Allow users to upload images for each item to create a more visual and engaging interface.