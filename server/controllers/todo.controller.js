const mongoose = require(
  "mongoose"
);

const TodoService = require(
  "../services/todo.service"
);

exports.createTodo = async (
  req,
  res,
  next
) => {
  try {
    
    const {
      title,
      description
    } = req.body;

    if (
      !title ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title and description are required"
      });
    }

    const todo =
      await TodoService.createTodo(
        req.user.userId,
        title,
        description
      );

    res.status(201).json({
      success: true,
      message:
        "Todo created successfully",
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

exports.getTodos = async (
  req,
  res,
  next
) => {
  try {
    const todos =
      await TodoService.getTodos(
        req.user.userId
      );

    res.status(200).json({
      success: true,
      data: todos
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (
  req,
  res,
  next
) => {
  try {
    const { id } =
      req.params;

    const {
      title,
      description
    } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(
        id
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid Todo ID"
      });
    }

    if (
      !title ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title and description are required"
      });
    }

    const todo =
      await TodoService.updateTodo(
        req.user.userId,
        id,
        title,
        description
      );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message:
          "Todo not found"
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Todo updated successfully",
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (
  req,
  res,
  next
) => {
  try {
    const { id } =
      req.params;

    if (
      !mongoose.Types.ObjectId.isValid(
        id
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid Todo ID"
      });
    }

    const todo =
      await TodoService.deleteTodo(
        req.user.userId,
        id
      );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message:
          "Todo not found"
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Todo deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};