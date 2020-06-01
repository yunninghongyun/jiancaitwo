import React from "react";
import Login from "../src/components/login/Login";
import Main from "../src/components/main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Zhuce from "./components/login/Keti";
// import Zhaopin from "./components/login/zhaopin";
// import Shehui from "./components/login/shehui";
// import Xiaoqi from "./components/login/xiaoqi";

function App() {
  let api = window.api;
  console.log(api);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/main" component={Main} />
          <Route exact path="/" component={Login} />
          {/* <Route path="/zhuce" component={Zhuce} />
          <Route path="/zhaopin" component={Zhaopin} />
          <Route path="/shehui" component={Shehui} />
          <Route path="/xiaoqi" component={Xiaoqi} /> */}
        </header>
      </div>
    </Router>
  );
}

export default App;
