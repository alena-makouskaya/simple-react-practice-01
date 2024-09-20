import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Accordion/Rating/Rating";

function App() {
  return (
    <div className="App">
      <AppTitle />

      <Rating value={"bkj"}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Rating value={0}/>
      <Accordion />
    </div>
  );
}



function AppTitle() {
  return <h3>This is APP component</h3>
}

export default App;
