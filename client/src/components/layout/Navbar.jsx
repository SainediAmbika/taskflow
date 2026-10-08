import { Link, useNavigate } from "react-router-dom";

import useTheme from "../../context/useTheme";

const Navbar = () => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const user = JSON.parse(
    localStorage.getItem("taskflow_user") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("taskflow_token");
    localStorage.removeItem("taskflow_user");

    navigate("/login", { replace: true });
  };

  return (
    <nav className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          TaskFlow
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* User */}
          {user?.email && (
            <span className="hidden text-sm text-slate-600 dark:text-slate-300 sm:block">
              {user.email}
            </span>
          )}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;