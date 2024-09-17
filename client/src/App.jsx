import React ,{lazy, Suspense}from 'react'
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import { ProtectRoute } from './components';
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(()=> import("./pages/Home"));
const Login = lazy(()=> import("./pages/Login"));
const Chat = lazy(()=> import("./pages/Chat"));
const Group = lazy(()=> import("./pages/Group"));
const NotFound = lazy(()=> import("./pages/NofFound"))


let user = true;

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader/>} >
      <Routes>
        <Route element = {<ProtectRoute user={user}/>}>

        <Route path='/' element={<Home/>} />
        <Route path='/chat/:chatId' element={<Chat/>} />
        <Route path='/group' element={<Group/>} />

        </Route>

        <Route path='/login' element={<ProtectRoute user={!user} redirect='/'>
          <Login/>

        </ProtectRoute>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>

      </Suspense>

    </Router>
    
  )
}

export default App