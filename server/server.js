const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const authRouter = require('./routes/auth');
const authController = require('./controllers/authController');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth', authRouter);

app.get('/secret', authController.verifyUser, (req, res) => {
  return res.status(200).json('here is some secret info!');
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build/')));

  app.get('/', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  );
}

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  const error = { ...defaultErr, ...err };
  return res.status(error.status).json(error.message);
});

app.listen(3000);
