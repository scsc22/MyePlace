myeplace
|-- config
|   |-- connection.js        // Database connection setup
|   |-- middleware.js        // Custom middleware
|   |-- config.json          // Sequelize configuration
|
|-- controllers
|   |-- homeController.js    // Controller for the homepage
|   |-- authController.js    // Controller for authentication
|   |-- dashboardController.js  // Controller for user dashboard
|   |-- postController.js    // Controller for handling blog posts
|   |-- commentController.js // Controller for handling comments
|
|-- models
|   |-- index.js             // Sequelize model index file
|   |-- User.js              // User model
|   |-- Post.js              // Blog post model
|   |-- Comment.js           // Comment model
|
|-- public
|   |-- assets
|       |-- css
|       |-- js
|
|-- views
|   |-- layouts
|       |-- main.handlebars  // Main layout file
|   |-- partials
|       |-- navbar.handlebars // Navbar partial
|   |-- home.handlebars      // Homepage view
|   |-- login.handlebars     // Login view
|   |-- signup.handlebars    // Signup view
|   |-- dashboard.handlebars  // User dashboard view
|   |-- post.handlebars      // Individual blog post view
|
|-- routes
|   |-- apiRoutes.js         // API routes
|   |-- htmlRoutes.js        // HTML routes
|
|-- seeds
|   |-- seed.js              // Seed data for the database
|
|-- utils
|   |-- helpers.js           // Handlebars helpers
|
|-- .env                     // Environment variables
|-- .gitignore               // Git ignore file
|-- package.json             // Project dependencies and scripts
|-- server.js                // Express.js server setup
