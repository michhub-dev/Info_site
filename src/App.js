import React from 'react';
import "./styles.css";
import Header from "./components/Header";
import MidImages from './components/MidImages';
import Main from "./components/Main";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MidImages />
      <Main />
      <Footer />
    </div>
  );
}
