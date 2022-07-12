import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Routes,
        Route,
        Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    )
}

export default App;
