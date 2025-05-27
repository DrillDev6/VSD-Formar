import { Router } from "express";
import { 
    deleteUser,
    getUserById,
    updateUser,
    createUser,

} from "../Controllers/userController"

export const userRouter = Router()

.get("/users/:id", getUserById)
.post("/users", createUser)
.patch("/users/:id", updateUser)
.delete("/users/:id", deleteUser);