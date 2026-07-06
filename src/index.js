//construção da váriavel que leva o nosso App.jsx para o index.html

import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"))
root.render(<App />);
