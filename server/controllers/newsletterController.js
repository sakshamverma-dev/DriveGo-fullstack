import Subscription from "../models/Subscription.js";

// Subscribe user to newsletter
export const subscribeToNewsletter = async (req, res) => {
    try {
        const { _id, email } = req.user;

        // Check if user already subscribed
        const existingSubscription = await Subscription.findOne({ userId: _id });
        if (existingSubscription) {
            return res.json({ success: false, message: "You are already subscribed!" });
        }

        // Create subscription
        await Subscription.create({ userId: _id, email });
        res.json({ success: true, message: "You have been subscribed successfully!" });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Check if user is subscribed
export const checkSubscriptionStatus = async (req, res) => {
    try {
        const { _id } = req.user;
        const subscription = await Subscription.findOne({ userId: _id });
        
        res.json({ success: true, isSubscribed: !!subscription });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
