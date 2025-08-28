import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/" replace />,
  },
  {
    path: '/',
    element: <App/>,
    children: [
        
    ]
  },
]);
