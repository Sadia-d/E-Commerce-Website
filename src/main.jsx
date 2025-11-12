import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router'
import ContextProvider from './Context/ContextProvider'
 import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <RouterProvider router={router} ></RouterProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </ContextProvider>
  </StrictMode>,
)
