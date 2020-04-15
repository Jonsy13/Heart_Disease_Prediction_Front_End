import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Containers/Layout';
import { BrowserRouter } from "react-router-dom";
class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div className="homy">
          <Layout />
       </div>
      </BrowserRouter>



    );
  }
}

export default App;
