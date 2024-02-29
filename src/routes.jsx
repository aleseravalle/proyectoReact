import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import LastMovieInDb from './components/LastMovieInDb'
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
        path: '/last-movie',
        element: <LastMovieInDb />,
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