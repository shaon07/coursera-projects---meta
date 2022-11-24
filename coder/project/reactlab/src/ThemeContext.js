import { createContext, useState,useContext } from "react";

const ThemeContext = createContext(null)


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const changeColor = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, changeColor: changeColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
