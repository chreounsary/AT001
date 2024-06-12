import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AuthRoute from './AuthRoute';
const Home = React.lazy(() => import('./pages/Home'))
const Page404 = React.lazy(() => import('./pages/Page404'))
const Logout = React.lazy(() => import('./auth/Logout'))
const UserLogin = React.lazy(() => import('./auth/UserLogin'))
const UserRegister = React.lazy(() => import('./auth/UserRegister'))
const Profile = React.lazy(() => import('./pages/Profile'))
const Deposit = React.lazy(() => import('./pages/Deposit'))
const Withdrawal = React.lazy(() => import('./pages/Withdrawal'))
const GamePlay = React.lazy(() => import('./pages/GamePlay'))
const GameList = React.lazy(() => import('./pages/GameList'))
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          	<Route path="/" element={<Home />} />
			<Route path="*" element={<Page404 />} />
         	<Route path="/login" element={<UserLogin /> } />
          	<Route path="/register" element={<UserRegister />} />
          	<Route path='/logout' element={<AuthRoute> <Logout/> </AuthRoute>} />
         	<Route path='/profile' element={<AuthRoute> <Profile/> </AuthRoute>} />
			<Route path='/deposit' element={<AuthRoute> <Deposit/> </AuthRoute>} />
			<Route path='/withdrawal' element={<AuthRoute> <Withdrawal/> </AuthRoute>} />
			<Route path='/game/play/:providercode/:gamecode' element={<AuthRoute> <GamePlay/> </AuthRoute>} />
			<Route path='/gamelist/:providercode' element={<GameList/>} />
      </Routes>
  	</Suspense>
</BrowserRouter>
  )
}
export default App