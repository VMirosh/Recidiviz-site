import './App.css';
import './reset.css';

import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";


function App(props) {
  return (
    <div className="wrapper">
      <Header
          background = {props.state.header.blockLink}
          blockLink ={props.state.header.blockLink}
          top={props.state.header.top}
          content={props.state.header.content}
          bottom={props.state.header.bottom}
      />
        <Main attribute = {props.state.main}/>
      <Footer attribute = {props.state.footer}/>

    </div>
  );
}

export default App;
