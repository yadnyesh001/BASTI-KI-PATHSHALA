const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
};

startServer();
