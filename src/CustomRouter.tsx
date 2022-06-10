import type { FC } from 'react';
import { Route, Router, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import SightsPage from './Pages/SightsPage/SightsPage';
import TravelPage from './Pages/TravelPage/TravelPage';

const CustomRouter:FC=()=>{
    return(
        <Routes>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/sights' element={<SightsPage/>} />
            <Route path='/travel' element={<TravelPage/>} />
            <Route path='/' element={<HomePage/>} />
        </Routes>
    )
}

export default CustomRouter;