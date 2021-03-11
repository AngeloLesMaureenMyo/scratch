const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const authController = require('./controllers/authController');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * define route handlers
 */
app.use('/auth', authRouter);

app.use('/posts', postsRouter);

app.get('/secret', authController.verifyUser, (req, res) => {
  return res.status(200).json('here is some secret info!');
});

/**
 * serve the bundle file in production mode
 * AND
 * handle requests for static files
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build/')));

  app.get('/', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html')));
}

/*
Ready the input/output
*/
io.on('connection', (socket) => {
  // console.log('WebSocket connected');
  socket.on('new post', (post) => {
    // console.log('server received the new post');
    io.sockets.emit('new post', post)
  })
  socket.on('disconnect', () => {
    // console.log('Websocket: bye, bitch!!!!!');
  });
});

/*
catch-all route handler for any requests to an unknown route
*/
app.get('*', (req, res) => {
  return res.status(404).json();
});

/*
global error handler
*/
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  console.log('inside global error handler')
  const error = { ...defaultErr, ...err };
  return res.status(error.status).json(error.message);
});

/*
start server
*/
http.listen(3000, () => {console.log('Listening on Port 3000')});

module.exports = app;
