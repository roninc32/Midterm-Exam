const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3001;

// Set up Sequelize connection
const sequelize = new Sequelize('mysql://root:@localhost:3306/mydatabase'); // No password

// Define the User model
const User = sequelize.define('User', {
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
name: {
type: DataTypes.STRING,
allowNull: false
},
email: {
type: DataTypes.STRING,
allowNull: false
},
status: {
type: DataTypes.STRING,
defaultValue: 'active'
}
});

// Route to fetch all users
app.get('/users', async (req, res) => {
try {
const users = await User.findAll();
res.json(users);
} catch (err) {
res.status(500).json({ message: 'Error fetching users', error: err });
}
});

// Start the server
app.listen(port, async () => {
try {
await sequelize.authenticate();
console.log('Database connected');
console.log(`Server is running on http://localhost:${port}`);
} catch (err) {
console.error('Unable to connect to the database:', err);
}
});