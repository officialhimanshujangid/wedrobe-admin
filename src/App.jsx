import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import Layout from './layout/Layout';
import Signup from './pages/Signup';
import CreateVendor from './pages/CreateVendor';
function App() {

  
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<CreateVendor />} />
          <Route path="/*" element={<PrivateRoute element={<Layout />} />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
  
  )
}

export default App

