import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        email: { type: String, required: true },
        subscribedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

// Create unique index on userId to ensure only one subscription per user
subscriptionSchema.index({ userId: 1 }, { unique: true });

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
