import { createRoot } from "react-dom/client";
import Board from "./components/Board";
import "./ChessVisualizer.css";

createRoot(document.getElementById("root")!).render(<Board />);
