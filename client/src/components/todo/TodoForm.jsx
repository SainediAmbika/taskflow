import { useEffect, useState } from "react";

const TodoForm = ({
  onSubmit,
  editingTodo,
  onCancelEdit
}) => {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !description.trim()
    ) {
      return;
    }

    const success = await onSubmit({
      title: title.trim(),
      description: description.trim()
    });

    if (success) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
        {editingTodo
          ? "Edit Task"
          : "Add New Task"}
      </h2>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            placeholder="Enter task title"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Description
          </label>

          <textarea
            rows="4"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Enter task description"
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            {editingTodo
              ? "Update Task"
              : "Add Task"}
          </button>

          {editingTodo && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="rounded-lg border border-slate-300 px-5 py-2.5 dark:border-slate-700 dark:text-slate-300"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TodoForm;