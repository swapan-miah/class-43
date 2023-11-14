import App from "../App";
import Cart from "../components/Cart/Cart";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardAbout from "../components/Dashboard/DashboardAbout/DashboardAbout";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import DashboardPortfolio from "../components/Dashboard/DashboardPortfolio/DashboardPortfolio";
import DashboardContact from "../components/Dashboard/DeshboardContact/DashboardContact";
import Home from "../components/Home/Home";
import Nathing from "../components/Nathing/Nathing";
import Product from "../components/Product/Product";
import {createBrowserRouter,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        
        {
          path: "/product",
          element: <Product />,
          loader: () => fetch('product.json')
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: () => fetch('product.json')
        },
        {
          path: "*",
          element: <Nathing />
        }
  
      ]
    },
  
    {
  
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
  
        {
          path: "/dashboard",
          element: <DashboardHome></DashboardHome>
        },
        {
          path: "/dashboard/home",
          element: <DashboardHome></DashboardHome>
        },
        {
          path: "/dashboard/about",
          element: <DashboardAbout></DashboardAbout>
        },
        {
          path: "/dashboard/portfolio",
          element: <DashboardPortfolio></DashboardPortfolio>
        },
        {
          path: "/dashboard/contact",
          element: <DashboardContact></DashboardContact>
        }
  
      ]
    }
  
]);

export default router;