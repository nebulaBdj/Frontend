import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const queryCilent = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryCilent}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
