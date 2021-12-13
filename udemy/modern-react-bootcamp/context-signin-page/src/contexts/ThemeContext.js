import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{props.children}</ThemeContext.Provider>;
}
