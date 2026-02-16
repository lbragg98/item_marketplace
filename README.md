# Item Marketplace

Item Marketplace is a React-based administrator portal for managing video game items in an e-commerce-style environment.  

This application allows administrators to create, view, update, search, and delete items using a simulated backend powered by json-server.

---

 Setup Instructions

Follow these steps to run the project locally.

git clone git@github.com:lbragg98/item_marketplace.git
cd item_marketplace

npm install
npm run server

The backend will run at:
http://localhost:3001

You can verify it by visiting:
http://localhost:3001/items


In separate terminal

npm run dev
The application will run at:
http://localhost:5173

Both servers must be running at the same time.

Usage

/
Landing page describing the marketplace.

/shop
Displays all available items with search functionality.

/shop/:id
Displays detailed information for a single item.
Allows price updates and item deletion.

/admin
Allows administrators to create new items.

Features

Full CRUD functionality (Create, Read, Update, Delete)

Global state management using Context API

React Router for navigation

Dynamic search filtering

Responsive layout

Simulated backend using json-server

Known Limitations

Images cannot be uploaded through the application when creating new items. Image URLs must be added manually in db.json.

Data persistence is limited to the local json-server environment.

No authentication or user access control is implemented.