import React, { Suspense } from 'react'
import MasterRoutes from './Routes/MasterRoutes';
import { Spin } from 'antd';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<Spin className="spinner" />}>
          <MasterRoutes />
        </Suspense>
    </BrowserRouter>
  )
}

export default App