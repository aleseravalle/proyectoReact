import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LastProductInDb from './components/LastProductInDb'
import ContentWrapper from './components/ContentWrapper'
import CategorieInDb from './components/CategorieInDb'
import Product from './components/Product'
import SearchMovies from './components/SearchMovies'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ContentWrapper />,
      },
      {
        path: '/last-product',
        element: <LastProductInDb />,
      },
      {
        path: '/categorie',
        element: <CategorieInDb />,
      },
      {
        path: '/Product',
        element: <Product />,
      },
      {
        path: '/search',
        element: <SearchMovies />,
      }
    ]
  },
])

export default routes