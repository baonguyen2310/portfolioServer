import { Router } from "express";
import { contact } from "../controllers.js/contact.js";

const router = Router();

router.post('/', contact);

export default router;