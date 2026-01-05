import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import DataProvider from './context/DataContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
