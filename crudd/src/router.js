import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BooksListt from './components/books/BooksListt';
import CreateBooks from './components/books/CreateBooks';
import EditBooks from "./components/books/EditBooks";

const router = createBrowserRouter([
    {path:"/",element:<App/>},
    {path:"library/books",element:<BooksListt/>},
    {path:'library/books/create',element:<CreateBooks/>},
    {path:'library/books/edit/:bookId',element:<EditBooks/>},
]);

export default router;