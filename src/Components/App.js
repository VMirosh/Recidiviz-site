import './App.css';
import './reset.css';

import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header/>
        <Main/>
        <Footer/>


    </div>
  );
}

export default App;
