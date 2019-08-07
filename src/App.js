import React from "react";
import "./App.scss";

import { Header } from "./components/Header";
import { Blockquote } from "./components/Blockquote";
import { Experience } from "./components/Experience";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Blockquote />

      <div class="container">
        <div class="scrolling-content categories">
          <Experience />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
