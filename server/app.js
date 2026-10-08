const express = require(
  "express"
);

const cors = require(
  "cors"
);

const userRoutes = require(
  "./routes/user.routes"
);

const todoRoutes = require(
  "./routes/todo.routes"
);

const errorMiddleware =
  require(
    "./middleware/error.middleware"
  );

const app =
  express();

app.use(
  cors({
    origin:
      "http://localhost:5173"
  })
);

app.use(
  express.json()
);

app.get(
  "/",
  (req, res) => {
    res.status(200).json({
      success: true,
      message:
        "TaskFlow API is running"
    });
  }
);

app.use(
  "/",
  userRoutes
);

app.use(
  "/",
  todoRoutes
);

app.use(
  errorMiddleware
);

module.exports = app;