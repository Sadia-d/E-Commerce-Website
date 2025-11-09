import { createBrowserRouter } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import Header from "./Header";
import NewArrivals from "./Components/NewArrivals";
import Collections from "./Pages/Collections";
import Contact from "./Pages/Contact";
import Deatils from "./Components/Deatils";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index:true ,
            element :<Home></Home>,     
        },
        {
          path:'/home',
          element:<Home></Home>,
           loader: ()=> fetch('products.json')
        },
        {
          path:'/arrivals',
          element:<NewArrivals></NewArrivals>,
           loader: ()=> fetch('products.json')
        },
        {
          path:'/details/:id',
          element:<Deatils></Deatils>,
           loader: ()=> fetch('products.json')
        },
        {
          path:'/collections',
          element:<Collections></Collections>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
    ]
  },
]);