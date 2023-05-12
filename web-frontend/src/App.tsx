import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './components/screens/HomeScreen';
import { LoginScreen } from './components/screens/LoginScreen';



export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
