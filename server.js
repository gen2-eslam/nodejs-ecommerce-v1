const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: 'config.env' });


const ApiError = require('./utils/api_error');
const  globalError  = require('./middlewares/error_middleware');
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');


// Connect with db
 dbConnection();

// express app
const app = express();

// Middlewares
app.use(express.json());


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use('/api/v1/categories', categoryRoute);
app.all('*', (req, res, next) => {
  next(new ApiError("Can't find this route on this server!", 404));
});
// Error handler
app.use(globalError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});

