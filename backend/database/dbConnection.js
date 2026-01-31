import mongoose from 'mongoose'; //just mongoose import!
import dotenv from 'dotenv';
dotenv.config();

//Database connection here!
const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: 'Job_Portal',
    })
    .then(() => {
      //agar connect ho jaye toh!
      console.log('Changes Done MongoDB Connected Sucessfully okk pr!');
    })
    .catch((error) => {
      console.log(`OK done Failed to connect ${error}`); //warna error de do console me!
    });
};
export default dbConnection;
