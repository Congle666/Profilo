import { useState, useEffect } from "react";

/**
 * Hook quản lý dark/light theme.
 * Lưu preference vào localStorage, đọc system preference nếu chưa có.
 * Toggle class "light" trên <html> element.
 */
export function useTheme() {
  // Luôn dark mode, không toggle
  const [theme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
