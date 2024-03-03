import express from "express";

const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

import { Liveblocks } from "@liveblocks/node";
import { __shouldUserHaveAccess__ } from "../utils/userAccess.js";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_CaD1Kf29nFbHlHTb1t-hOzS2_uGsPmwwfg1BqE9hAccu3elc9pFbjiv9GuWiCaKk",
});

const liveblockauth = async (req, res) => {
  console.log("i am here in the liveblockauth");
  try {
    // Get the current user from your database
    const user = req.user;
    console.log(user.email, "user._id");

    // Start an auth session inside your endpoint
    const session = await liveblocks.prepareSession(user.email);

    // Implement your own security, and give the user access to the room/organization.
    // Note: Even if room is defined, we recommend to always use wildcards.
    const { room } = req.body;
    console.log(room, "room");
    if (room && __shouldUserHaveAccess__(user._id, room)) {
      session.allow(room, session.FULL_ACCESS);
    } else {
      session.allow(`${user.organization}*`, session.READ_ACCESS);
    }

    // Authorize the user and return the result
    const { status, body } = await session.authorize();
    return res.status(status).end(body);
  } catch (error) {
    console.log(error);
  }
};

router.post("/", protect, liveblockauth);

export default router;
