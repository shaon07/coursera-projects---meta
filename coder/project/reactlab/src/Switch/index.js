import "./Styles.css";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

const Switch = () => {
  const { theme,changeColor } = useTheme();
  return (
    <label className="switch">
      <input
      onChange={()=>changeColor("dark")}
        type="checkbox"
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
