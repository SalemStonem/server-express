import { Router } from "express";
import { getAccount, addAccount, deleteAccount } from "../controllers/account.controller";


const router = Router();

router.get("/cuentas", getAccount);

router.post("/cuentas", addAccount);

router.delete("/cuentas/:id", deleteAccount);

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default router;
