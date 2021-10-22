import React from "react";
import Routes from "./Router/Routes";
import GlobalState from "./Global/GlobalState";


function App() {
  return (
    <GlobalState>
    <Routes />
    </GlobalState>
  );
}

export default App;
