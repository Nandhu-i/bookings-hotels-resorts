import express  from "express";
import { 
     updateUser, 
     deleteUser, 
     getUser, 
     getUsers 
    } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
// import User from "../models/User.js"


const router = express.Router();

// create
// router.post('/', createUser);

// router.get("/checkauthentication", verifyToken, (req, res) => {
//  res.send("you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res) => {
//     res.send("Hello user, you are logged in and you can delete your account");
//    });

//    router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//     res.send("Hello admin, you are logged in and you can delete all accounts");
//    });

// update
router.put("/:id", verifyUser, updateUser);


// delete
router.delete('/:id', verifyUser, deleteUser);

// get
router.get('/:id', verifyUser, getUser);


// getall
router.get('/', verifyAdmin, getUsers);

export default router;