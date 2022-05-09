import React, {useContext, useState} from "react"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import env from 'react-dotenv';
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Main from "./page/Main";
import Register from "./page/Register";

import "./App.css"
import {observer} from "mobx-react-lite";
import Context from "./Context";
import Profile from "./page/Profile";
import ProfileCard from "./page/ProfileCard";
import Mentor from "./page/Mentor";
import Info from "./page/Info";
import TermsOfUse from "./page/TermsOfUse";
import PrivacyPolicy from "./page/PrivacyPolicy";

const App = observer(() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  if (loading) {
    user.checkIsAuth().then(data => {
      setLoading(false);
    }).finally(() => setLoading(false));
  }

  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <BrowserRouter>
      <div className = "app" >
        <Header />
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/register" element={ !user.isAuth ? <Register /> : <Navigate to="/" />}/>
            <Route path="/profile" element={ user.isAuth ? <Profile /> : <Navigate to="/" />}/>
            <Route path="/profile/card" element={ user.isAuth ? <ProfileCard /> : <Navigate to="/" />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/terms-of-use" element={<TermsOfUse />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/mentor/:id" element={ <Mentor />}/>
            <Route path="*" element={<div className="container"><h1>Страница в разработке</h1></div>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
})

export default App;