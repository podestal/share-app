import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserProvider } from './context/UserProvider.jsx'
import { MoviesProvider } from './context/MoviesProvider.jsx'
import { ServicesProvider } from './context/ServicesProivder.jsx'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MoviesProvider>
      <ServicesProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
              <ReactQueryDevtools />
            </BrowserRouter>
          </QueryClientProvider>
        </UserProvider>
      </ServicesProvider>
    </MoviesProvider>,
  // </React.StrictMode>,
)
