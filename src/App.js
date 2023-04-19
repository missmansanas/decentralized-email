import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Header />

        <div className="app-body">
          <Sidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </BrowserRouter>
        </div>

        {/* <SendMail/> */}
      </div>
  );
}

export default App;
