import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './react-query/index'
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import RootLayout from './layout/index.tsx'
import { PATHS } from './routes/path.ts'
import HomeScreen from './module/Homescreen/index.tsx'
import Cart from './module/Cart/index.tsx'
import Blog from './module/Blog/index.tsx'
import Category from './module/Category/index.tsx'
import Collection from './module/Collection/index.tsx'
import Login from './module/Login/index.tsx'
import Store from './module/Store/index.tsx'
import AppContextProvider from './context/index.tsx'
import SingleProduct from './module/SingleProduct/index.tsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: PATHS.HOME, element: <HomeScreen /> },
      { path: PATHS.CART, element: <Cart /> },
      { path: PATHS.BLOG, element: <Blog /> },
      { path: PATHS.CATEGORY, element: <Category /> },
      { path: PATHS.COLLECTION, element: <Collection /> },
      { path: PATHS.LOGIN, element: <Login /> },
      { path: PATHS.STORE, element: <Store /> },
      { path: "/products/:id", element: <SingleProduct /> },
    ] as RouteObject[]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={routes} />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
