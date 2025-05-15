import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));
