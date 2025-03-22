import { Request, Response, Router } from "express";
import { logincontroller } from "../controller/authController";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/login", logincontroller);
router.post("/test", requireAuth,(req: Request, res: Response) => {
    return res.send("End reached");
});
export default router;