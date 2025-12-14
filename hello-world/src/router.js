import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Greetings from "./components/Greetings";
import Crud from "./components/Crud"

const router = createBrowserRouter([
    { path: 'App', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greetings/>},
    {path: '',element:<Crud/>}
]);

export default router;