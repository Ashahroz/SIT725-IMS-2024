# Inventory Management System (IMS)

IMS is a web application designed to help manage inventory, sales, and orders for a business.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Users can log in with their email and password.
- **Dashboard**: Provides a summary of total sales, orders, stock, and more.
- **Add Order**: Allows users to add new orders to the system.
- **View Orders**: Users can view existing orders.
- **Add Stock**: Allows users to add new stock items.
- **View Stocks**: Users can view existing stock items.
- **Customization**: Users can customize brands, categories, and sizes.
- **Filtering**: Provides options to filter sales and stock.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (with Semantic UI and Bootstrap)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing
- **Other**: querystring (for parsing form data)

## Installation

1. Clone the repository:

    ```bash
    git clone <https://github.com/Ashahroz/SIT725-IMS-2024.git>
    ```

2. Install dependencies:

    ```bash
    cd ims
    npm install
    ```

3. Set up environment variables:
   
    Create a `.env` file in the root directory and add the following variables:

    ```dotenv
    MONGODB_USERNAME=demouser
    MONGODB_PASSWORD=demopass123
    MONGODB_CLUSTER_NAME=sit725
    ```
    Credentials
        username: admin@sit725.com
        password: admin123

4. Start the server:

    ```bash
    npm start
    ```

## Usage

1. Open a web browser and navigate to `http://localhost:3000`.
2. Log in with your email and password.
3. Explore the dashboard, add orders, manage stock, and customize settings as needed.

## File Structure
ims/
│
├── controllers/
│ └── auth.js
│
├── models/
│ ├── auth.js
│ └── db.js
│
├── public/
│ ├── images/
│ └── styles.css
│
├── routes/
│ └── auth.js
│
├── views/
│ ├── home.ejs
│ ├── login.ejs
│ ├── order.ejs
│ └── stock.ejs
│ └── bill.ejs
│ └── brands.ejs
│ └── categories.ejs
│ └── index.ejs
│ └── register.ejs
│ └── sales_filter.ejs
│ └── sizes.ejs
│ └── stock_filter.ejs
│ └──stocks.ejs
│ └──viewstocks.ejs
│
├── urlencodedtoJSON.js
├── .env
├── index.js
└── README.md

## Contributing

Aiman Shahroz, Niraj Khatiwada, Zeba Rashid and Hassan Raza

## License

This project is licensed under the [MIT License](LICENSE).
