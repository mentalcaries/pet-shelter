import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';
import Search from '../Search/Search';
import Register from '../Register/Register';
import UserProfile from '../UserProfile/UserProfile';
import AdoptPage from '../AdoptPage/AdoptPage';
import ShelterProfile from '../ShelterProfile/ShelterProfile';


function App() {
  const [searchResults, setSearchResults] = useState<[]>([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/search"
          element={<Search setSearchResults={setSearchResults} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/shelter" element={<ShelterProfile />} />


        <Route
          path="/adopt"
          element={
            <AdoptPage
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
