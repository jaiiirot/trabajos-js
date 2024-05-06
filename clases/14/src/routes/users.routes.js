import { Router } from "express";
import { userModel } from "../models/user.model.js";
const router = Router();

//Get all users
router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.status(200).send({
      status: 200,
      result: "success",
      payload: users,
    });
  } catch (error) {
    console.log("Cannot get users from Mongo: " + error);
    res.status(500).send({
      status: 500,
      result: "error",
      payload: "Error getting users from Mongo",
    });
  }
});

// Create new user
router.post("/", async (req, res) => {
  let { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    res.status(400).send({
      status: 400,
      result: "error",
      payload: "Missing required fields",
    });
  }

  try {
    let newUser = await userModel.create({ first_name, last_name, email });
    res.status(201).send({
      status: 201,
      result: "success",
      payload: newUser,
    });
  } catch (error) {
    console.log("Cannot create user in Mongo: " + error);
    res.status(500).send({
      status: 500,
      result: "error",
      payload: "Error creating user in Mongo",
    });
  }
});

// Update user by UID
router.put("/:uid", async (req, res) => {
  let { uid } = req.params;

  let userToReplace = req.body;

  if (
    !userToReplace.first_name ||
    !userToReplace.last_name ||
    !userToReplace.email
  ) {
    res.status(400).send({
      status: 400,
      result: "error",
      payload: "Incomplete values",
    });
  }

  try {
    let user = await userModel.updateOne({ _id: uid }, userToReplace);
    res.status(200).send({
      status: 200,
      result: "success",
      payload: user,
    });
  } catch (error) {
    console.log("Cannot update user in Mongo: " + error);
    res.status(500).send({
      status: 500,
      result: "error",
      payload: "Error updating user in Mongo",
    });
  }
});

// Delete user by UID
router.delete("/:uid", async (req, res) => {
  let { uid } = req.params;

  try {
    let user = await userModel.deleteOne({ _id: uid });
    res.status(200).send({
      status: 200,
      result: "success",
      payload: user,
    });
  } catch (error) {
    console.log("Cannot update user in Mongo: " + error);
    res.status(500).send({
      status: 500,
      result: "error",
      payload: "Error updating user in Mongo",
    });
  }
});

export default router;
