1: Creating a Mongoose Schema:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String, // Field data type
    required: true, // Mark name as a required field
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  age: {
    type: Number,
    min: 18, // Set a minimum age limit
  },
});

//Explanation:
We import mongoose to create the schema.
new mongoose.Schema({}) creates a new schema object.
Inside the object, define fields as key-value pairs:
Key: Represents the field name in your documents.
Value: An object defining the field's properties:
type: Specifies the data type (e.g., String, Number, Boolean).
required (optional): Set to true if the field is mandatory.
unique (optional): Enforces unique values for that field across documents.
Other options for validation, defaults, and transformations are available (refer to Mongoose documentation).


2:Mongoose Models:
A Mongoose model is a compiled version of a schema.
It provides an interface to interact with your data in MongoDB (create, read, update, delete - CRUD operations).
You create a model by providing a name (singular) and the schema it's based on.

Creating a Mongoose Model:
JavaScript
const User = mongoose.model('User', userSchema);

mongoose.model takes two arguments:
The first argument ('User') is the singular name of the model representing your collection (usually lowercase and pluralized in MongoDB - users in this case).
The second argument (userSchema) is the schema you defined earlier.

the Model for CRUD Operations:

Once you have a model, you can use its methods to perform CRUD operations on your data:
Create:

JavaScript
const newUser = new User({ name: 'Bob', email: 'bob@example.com', age: 25 });
newUser.save() // Saves the new user document to the database
    .then(() => console.log('User created successfully!'))
    .catch(err => console.error('Error creating user:', err));

Read:
JavaScript
User.find({}) // Find all users
    .then(users => console.log(users))
    .catch(err => console.error('Error fetching users:', err));

User.findById('user_id') // Find a specific user by ID
    .then(user => console.log(user))
    .catch(err => console.error('Error fetching user:', err));

Update:
JavaScript
User.findByIdAndUpdate('user_id', { $set: { name: 'Alice' } }) // Update a user's name
    .then(user => console.log('User updated successfully!'))
    .catch(err => console.error('Error updating user:', err));

Delete:
JavaScript
User.findByIdAndDelete('user_id') // Delete a user by ID
    .then(() => console.log('User deleted successfully!'))
    .catch(err => console.error('Error deleting user:', err));

