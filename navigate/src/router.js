import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Hello from './Hello';

const router = createBrowserRouter([
    {path:'/', element : <App/>},
    {path:'hello/:name',element:<Hello/>},
]);
export default router;