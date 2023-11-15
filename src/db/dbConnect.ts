import mongoose from "mongoose";

export default async function dbConnect(uri: string) {
    try {
        await mongoose.connect(uri);

        if (uri) {
            console.log('Connected to MongoDB');
            return mongoose.connection;
        } else {
            throw new Error('No URL Found To Connect');
        }

        // error test
    } catch (error) {
        throw new Error(error as any); 
    }
}
