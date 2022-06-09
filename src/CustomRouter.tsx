import type { FC } from 'react';
import { Route, Router, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';

const CustomRouter:FC=()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>} />
        </Routes>
    )
}

export default CustomRouter;