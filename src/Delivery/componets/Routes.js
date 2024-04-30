import React from 'react'
import { Route } from 'react-router-dom'
import DHomePage from '../Main/DHomePage'

export default function Routes() {
  return (
    <div>
        <Routes>
            <Route path='/dhome/:email' element={<DHomePage/>}></Route>
        </Routes>
    </div>
  )
}
