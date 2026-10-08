const Todo = require(
  "../models/todo.model"
);

class TodoService {
  static async createTodo(
    userId,
    title,
    description
  ) {
    return Todo.create({
      userId,
      title,
      description
    });
  }

  static async getTodos(
    userId
  ) {
    return Todo.find({
      userId
    }).sort({
      createdAt: -1
    });
  }

  static async updateTodo(
    userId,
    todoId,
    title,
    description
  ) {
    return Todo.findOneAndUpdate(
      {
        _id: todoId,
        userId
      },
      {
        title,
        description
      },
      {
        new: true,
        runValidators: true
      }
    );
  }

  static async deleteTodo(
    userId,
    todoId
  ) {
    return Todo.findOneAndDelete({
      _id: todoId,
      userId
    });
  }
}

module.exports = TodoService;