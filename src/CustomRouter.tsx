import type { FC } from 'react';
import { Route, Router, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import SightsPage from './Pages/SightsPage/SightsPage';

const CustomRouter:FC=()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='sights' element={<SightsPage/>} />
        </Routes>
    )
}

export default CustomRouter;