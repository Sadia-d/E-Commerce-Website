import { createBrowserRouter } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import NewArrivals from "./Components/NewArrivals";
import Collections from "./Pages/Collections";
import Contact from "./Pages/Contact";
import Details from "./Components/Details";
import Cart from "./Components/Cart";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        // {
        //     index:true ,
        //     element :<Home></Home>,     
        // },
        {
          path:'/',
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
          element:<Details></Details>,
         loader: async ({ params }) => {
                    const pid = parseInt(params.id)
                    const data = await fetch('products.json'); 
                    const res = await data.json(); 
                    const product = res.find((prod) => prod.id === pid)
                    return product
         }
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
       
        {
          path:'/collections',
          element:<Collections></Collections>,
          loader:()=>fetch('winterProducts.json')
        },
        {
          path:'/contact',
          element:<Contact></Contact>,
        },
    ]
  },
]);