const TodoItem = ({
  todo,
  onEdit,
  onDelete
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div className="min-w-0">
          <h3 className="break-words text-lg font-semibold text-slate-900 dark:text-white">
            {todo.title}
          </h3>

          <p className="mt-2 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">
            {todo.description}
          </p>

          <p className="mt-3 text-xs text-slate-400">
            {new Date(
              todo.createdAt
            ).toLocaleString()}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => onEdit(todo)}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
          >
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(todo._id)
            }
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;