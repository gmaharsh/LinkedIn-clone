import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Feed from './Components/Body/Feed/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Auth from './Components/Authentication/Auth';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Auth />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
