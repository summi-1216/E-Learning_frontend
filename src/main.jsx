import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './context/userContext.jsx'
import { CourseContextProvider } from './context/courseContext.jsx'

export const server = 'https://e-learning-backend-ck5x.onrender.com'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
      <App />
      </CourseContextProvider>
    
    </UserContextProvider>
    {/* <App /> */}
   
  </StrictMode>,
)
