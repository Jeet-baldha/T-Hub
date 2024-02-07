Certainly! Below is an extended version of your README file with the instructions on starting both the frontend and backend servers.

```markdown
# T-Hub - T-Shirt Selling Website

Welcome to T-Hub - Your One-Stop Shop for Trendy T-Shirts!

## Overview

T-Hub is a web platform dedicated to providing a seamless and enjoyable shopping experience for T-shirt enthusiasts. Explore our extensive collection of high-quality T-shirts featuring unique designs, comfortable fabrics, and affordable prices.

## Features


- **Browse and Shop:** Explore our extensive collection of T-shirts for men, women, and kids. Find the latest trends and classic styles to suit your preferences.

- **User Authentication:** Create an account, log in, and enjoy personalized shopping. Keep track of your orders, save favorite items, and more.

- **Secure Checkout:** Experience a secure and straightforward checkout process. Your payment information is handled with care to ensure a safe transaction.

  **Payment Gateway Integration:** We use [Razorpay](https://razorpay.com/) for secure and efficient payment processing.

- **Order Tracking:** Stay updated on the status of your orders. Track shipments and know when your stylish T-shirts will arrive.

- **Responsive Design:** T-Hub is designed to provide an optimal viewing and shopping experience across various devices, including desktops, tablets, and smartphones.


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the repository

```bash
git clone https://github.com/jeet-baldha/t-hub.git
cd t-hub
```

### Install dependencies

```bash
npm install

```

### Configure Razorpay

1. **Sign up for a Razorpay account:**
   - Visit [Razorpay](https://razorpay.com/) and create an account.

2. **Obtain your Razorpay API Key and Secret:**
   - Once logged in, navigate to the Dashboard and retrieve your API Key and Secret from the Settings section.

3. **Configure environment variables:**
   - Open your `.env` file and add the following Razorpay configuration:

     ```env
     REACT_APP_RAZORPAY_KEY=your-razorpay-key
     REACT_APP_RAZORPAY_SECRET=your-razorpay-secret
     ```

     Replace `your-razorpay-key` and `your-razorpay-secret` with your actual Razorpay API Key and Secret.


### Configure environment variables

Create a `.env` file in the root directory and set the necessary configuration values. Sample:

```env
RAZORPAY_KEYL=YOUR KEY
RAZORPAY_SECRET=your-secret
```

### Start Backend Server

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Configure backend environment variables:**

   Create a `.env` file in the `server` directory and set the necessary configuration values such as database connection strings, API keys, etc.

4. **Start the backend server:**

   ```bash
   cd server
   node index.js
   ```

   The backend server will be running at [http://localhost:3000](http://localhost:3000).

   Note: Replace `your-backend-port` with the actual port number configured in your backend environment.

### Start Frontend Development Server

1. **Navigate back to the main project directory:**

   ```bash
   cd ..
   ```

2. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend development server will be running at [http://localhost:5173](http://localhost:5173).

Now you have both the backend and frontend servers running. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore T-Hub.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - Tailwind CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database

- **Authentication:**
  - Passport.js for user authentication

- **Payment Gateway:**
  - [Razorpay](https://razorpay.com/)

## Contributing

We welcome contributions to improve T-Hub! If you find any issues or have suggestions, please open an issue or create a pull request. See our [Contribution Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contact

For inquiries and support, please contact us at support@t-hub.com.

Happy shopping at T-Hub!
```
