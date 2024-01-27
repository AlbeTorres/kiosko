# <img src="https://raw.githubusercontent.com/AlbeTorres/kiosko/main/kiosko/src/assets/logo.webp" width="40px" heigth="40px" style="background:white"> Kiosko - Online E-commerce Platform

Kiosko is a modern and feature-rich online e-commerce platform designed to simplify the process of setting up and managing an online store. Whether you're a small business owner or an entrepreneur, Kiosko provides the tools you need to showcase and sell your products effectively.

https://kiosko-pi.vercel.app/

## Features

- **User-friendly Interface**: Kiosko offers an intuitive and easy-to-navigate interface for both store administrators and customers.

- **Product Management**: Easily add, edit, and remove products with detailed information, including images, descriptions, and pricing.

- **Order Processing**: Efficient order management system to keep track of customer orders, process payments, and update order statuses.

- **Responsive Design**: Kiosko is built with a responsive design, ensuring a seamless experience for users across different devices.

- **Search Functionality**: Help customers find what they're looking for quickly with a powerful search feature.

## TO-DO

- **Customization Options**: Tailor the look and feel of your online store with customizable themes, colors, and layouts.

- **Security**: Implement secure payment gateways to ensure the safety of customer transactions.

## Tech Stack

- **Frontend**:

  - React (v18.2.0)
  - Vite (v3.1.0)
  - Tailwind CSS (v3.1.8)

- **Database**:

  - MongoDB (Connection URI specified in the `.env` file)

- **State Management**:

  - React Query (v4.29.19)

- **UI Libraries**:

  - DaisyUI (v3.5.1)
  - React Icons (v4.4.0)

- **Form Handling**:

  - React Hook Form (v7.45.0)

- **Notifications**:

  - React Hot Toast (v2.2.0)
  - React Toastify (v9.1.1)

- **Routing**:

  - React Router DOM (v6.4.2)

- **Socket.IO**:

  - Socket.IO Client (v4.5.3)
  - Socket URL: [http://localhost:8900](http://localhost:8900)

- **Additional Utilities**:

  - Axios (v1.4.0)
  - React Phone Number Input (v3.1.42)
  - React Pin Field (v3.1.3)
  - Usehooks-ts (v2.9.1)

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AlbeTorres/kiosko.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd kiosko
   ```

3. **Install dependencies:**

   ```bash
   yarn
   ```

### Set up environment variables:

```bash
Create a .env file in the root directory and use the following template, replacing placeholders with your actual values:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/kiosko
SECRET_KEY=your_secret_key
VITE_REACT_APP_BACKEND_URL=YOUR_BACKEND_URL
VITE_REACT_APP_CLOUD_NAME=YOUR_CLOUD_NAME
VITE_REACT_APP_PRESET=YOUR_PRESET
VITE_SOCKET_URL=YOUR_SOCKET_URL

```

### Run the application:

```bash
yarn dev
```

Visit http://localhost:3000 to access your Kiosko online store.

# Contributing

We welcome contributions from the community! If you'd like to contribute to Kiosko, please follow our contribution guidelines.

Thank you for considering contributing to our project! We appreciate your interest and efforts to make it better.

## Getting Started

Before you start contributing, please follow these steps:

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.

## Making Changes

Please follow these guidelines when making changes:

1. Make sure your code adheres to the project's coding style.
2. Test your changes thoroughly.
3. Provide clear and concise commit messages.
4. Update documentation if necessary.

## Submitting Changes

Once you have made your changes, submit a pull request:

1. Include a descriptive title and detailed description of your changes.
2. Reference any relevant issues.

Thank you for your contribution!

# License

This project is licensed under the MIT License.

# Acknowledgements

Special thanks to contributors and open source libraries used in this project.
Feel free to reach out if you have any questions or need assistance with Kiosko.

Happy selling!👌

