import app from "./app/app";
import dbConnect from "./db/dbConnect";


const port = process.env.PORT ||8000;
const dbUrl:string = process.env.DB_URI || 'test';

(async () => {
  try {
    await dbConnect(dbUrl);
    app.listen(port, () => {
      console.log(`server is running at ${process.env.SERVER_URI}`)
    })
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
})();