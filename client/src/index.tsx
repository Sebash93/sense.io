import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";

const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
