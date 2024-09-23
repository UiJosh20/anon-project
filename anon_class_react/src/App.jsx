import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
import UploadImage from './pages/UploadImage'
import AddCounter from './pages/AddCounter'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/createproduct" element={<CreateProduct/>}></Route>

        <Route path="/" element={<UploadImage/>}></Route>
        <Route path="/counter" element={<AddCounter/>}></Route>
        
      </Routes>
    </>
  )
}

export default App