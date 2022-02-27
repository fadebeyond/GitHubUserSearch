import React from "react";
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaRedditAlien } from "react-icons/fa";
import Search from "./components/Search";
import Graph from "./components/graphs";
import Repos from "./components/Repos";
import Info from "./components/Info";
import { GitHubCustomHook } from "./context/context";

function App() {
  const ab = GitHubCustomHook();
  return (
    <div
      style={{
        backgroundColor: "#2b2e4a",
      }}
    >
      <Search />
      <Info />
      <Graph />
      <Repos />
    </div>
  );
}

export default App;
