// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import ClassRoom from './pages/ClassRoom';
// import Assessment from './pages/Assessment';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccounts from './pages/MyAccounts';
// import MySettings from './pages/MySettings';

// const App=()=> {
//   return (
//     <BrowserRouter>
//         {/* <Navbar/> */}
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<ClassRoom/>}/>
//             <Route path='/assessment' element={<Assessment/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}>
//                 <Route path='/profile/myaccount' element={<MyAccounts/>}/>
//                 <Route path='/profile/mysettings' element={<MySettings/>}/>
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//CRUD Operations
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Update";
import {ToastContainer} from "react-toastify"

const App=()=>{
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App