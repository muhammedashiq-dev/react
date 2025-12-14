import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Crud from "./components/Crud";

const router = createBrowserRouter([
  { path: "/", element: <Crud /> },
  { path: "/app", element: <App /> },
]);

export default router;
