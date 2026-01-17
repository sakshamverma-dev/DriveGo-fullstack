import express from "express";
import { subscribeToNewsletter, checkSubscriptionStatus } from "../controllers/newsletterController.js";
import { protect } from "../middleware/auth.js";

const newsletterRouter = express.Router();

newsletterRouter.post("/subscribe", protect, subscribeToNewsletter);
newsletterRouter.get("/check-status", protect, checkSubscriptionStatus);

export default newsletterRouter;
