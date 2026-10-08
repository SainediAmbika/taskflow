const express = require(
  "express"
);

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require(
  "../controllers/todo.controller"
);

const authMiddleware =
  require(
    "../middleware/auth.middleware"
  );

const router =
  express.Router();

router.use(authMiddleware);

router.post(
  "/createTodo",
  createTodo
);

router.get(
  "/getTodoList",
  getTodos
);

router.put(
  "/updateTodo/:id",
  updateTodo
);

router.delete(
  "/deleteTodo/:id",
  deleteTodo
);

module.exports = router;