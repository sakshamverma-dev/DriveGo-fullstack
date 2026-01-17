import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> {
            console.log("✅ Database Connected Successfully!") ;
        })
        
        mongoose.connection.on('error', (err) => {
            console.log("❌ MongoDB Connection Error:", err.message)
        })

        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 30000,
            connectTimeoutMS: 30000,
            retryWrites: true,
            w: 'majority'
        });
    } catch (error) {
        console.log("❌ Database Connection Failed:", error.message) ;
        // Retry after 5 seconds
        console.log("🔄 Retrying connection in 5 seconds...");
        setTimeout(connectDB, 5000);
    }
}

export default connectDB ;