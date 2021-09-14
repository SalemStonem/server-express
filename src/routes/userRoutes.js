import { Router } from "express";
import { getUsers, addUser, deleteUser } from "../controllers/user.controller";


const router = Router();

router.get("/usuarios", getUsers);

router.post("/usuarios", addUser);

router.delete("/usuarios/:id", deleteUser);

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;
