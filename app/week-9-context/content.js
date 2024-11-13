import { useContext } from "react";
import ThemeContext from "./theme-context";

function Content() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      <p>This is some content in { theme === "light" ? "Light" : "Dark"} mode! </p>
    </div>
  );
}
export default Content;