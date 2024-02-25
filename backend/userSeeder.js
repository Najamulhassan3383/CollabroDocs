import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
// import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://najm:najm@cluster0.fblk7gv.mongodb.net/"
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const users = [
  {
    name: "zain",
    email: "zain@example.com",
    password: "zain123",
  },
  {
    name: "aiyan",
    email: "aiyan@example.com",
    password: "aiyan456",
  },
  {
    name: "faraz",
    email: "faraz@example.com",
    password: "faraz789",
  },
  {
    name: "ali",
    email: "ali@example.com",
    password: "ali321",
  },
  {
    name: "hatim",
    email: "hatim@example.com",
    password: "hatim654",
  },
  {
    name: "farhan",
    email: "farhan@example.com",
    password: "farhan987",
  },
  {
    name: "najam",
    email: "najam@example.com",
    password: "najam234",
  },
  {
    name: "usman",
    email: "usman@example.com",
    password: "usman567",
  },
  {
    name: "arif",
    email: "arif@example.com",
    password: "arif890",
  },
  {
    name: "hassan",
    email: "hassan@example.com",
    password: "hassan012",
  },
];

//make a seeder function
const seeder = async () => {
  try {
    await connectDB();
    await User.deleteMany();
    console.log("Data Destroyed");

    const createdUsers = await User.create(users);
    console.log("Data Inserted");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seeder();
