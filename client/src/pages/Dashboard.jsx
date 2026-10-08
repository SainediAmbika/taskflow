import {
  useEffect,
  useMemo,
  useState
} from "react";

import Loading from "../components/common/Loading";
import Navbar from "../components/layout/Navbar";
import TodoForm from "../components/todo/TodoForm";
import TodoItem from "../components/todo/TodoItem";
import api from "../services/api";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  const [editingTodo, setEditingTodo] =
    useState(null);

  const [deleteTodoId, setDeleteTodoId] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await api.get("/getTodoList");

        setTodos(response.data.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
          "Unable to load tasks"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (
    todoData
  ) => {
    try {
      setError("");

      if (editingTodo) {
        const response =
          await api.put(
            `/updateTodo/${editingTodo._id}`,
            todoData
          );

        setTodos((previous) =>
          previous.map((todo) =>
            todo._id === editingTodo._id
              ? response.data.data
              : todo
          )
        );

        setEditingTodo(null);
      } else {
        const response =
          await api.post(
            "/createTodo",
            todoData
          );

        setTodos((previous) => [
          response.data.data,
          ...previous
        ]);
      }

      return true;
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Unable to save task"
      );

      return false;
    }
  };

  const handleDelete = async (id) => {
    try {
      setError("");

      await api.delete(
        `/deleteTodo/${id}`
      );

      setTodos((previous) =>
        previous.filter(
          (todo) => todo._id !== id
        )
      );

      setDeleteTodoId(null);
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Unable to delete task"
      );
    }
  };

  const filteredTodos = useMemo(() => {
    const searchText =
      search.toLowerCase().trim();

    if (!searchText) {
      return todos;
    }

    return todos.filter((todo) => {
      const title = String(
        todo.title || ""
      ).toLowerCase();

      const description = String(
        todo.description || ""
      ).toLowerCase();

      return (
        title.includes(searchText) ||
        description.includes(searchText)
      );
    });
  }, [todos, search]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-6xl px-3 py-3">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            My Tasks
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Organize your work with TaskFlow.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <TodoForm
            onSubmit={handleSubmit}
            editingTodo={editingTodo}
            onCancelEdit={() =>
              setEditingTodo(null)
            }
          />

          <section>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Tasks ({filteredTodos.length})
              </h2>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search tasks..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500 sm:w-64 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            {loading ? (
              <Loading />
            ) : filteredTodos.length ===
              0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
                <p className="text-slate-500 dark:text-slate-400">
                  {search
                    ? "No tasks match your search."
                    : "No tasks available. Create your first task."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTodos.map(
                  (todo) => (
                    <TodoItem
                      key={todo._id}
                      todo={todo}
                      onEdit={
                        setEditingTodo
                      }
                      onDelete={
                        setDeleteTodoId
                      }
                    />
                  )
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteTodoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
              Are you sure you want to delete
              this task?
            </p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setDeleteTodoId(null)
                }
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDelete(deleteTodoId)
                }
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
