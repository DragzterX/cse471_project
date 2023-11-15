import express from 'express';
import { User } from '../models/userModels.js';

const router = express.Router();

//route to create user (same can be used to create menu by copy paste and change parameters)
router.post('/', async(request, response) => {
    try{
        if (
            !request.body.Name ||
            !request.body.Phone_number
        ) {
            return response.status(400).send({
                message: "Fill up Name and Phone Number",
            });
        } //to check if all field filled otherwise error
        const newUser = {
            Name: request.body.Name,
            Phone_number: request.body.Phone_number
        }; //new user creation in database

        const user = await User.create(newUser); //creating user
        return response.status(201).send(user); //message to user
    } catch (error) {//for errors
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})
// Route for Get All users from database and count of users
router.get('/', async (request, response) => {
    try {
      const users = await User.find({});
  
      return response.status(200).json({
        count: users.length,
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Get One user from database by id
router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const user = await User.findById(id);
  
      return response.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Update a user
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.Name ||
      !request.body.Phone_number
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await User.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// Route for Delete a user
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;