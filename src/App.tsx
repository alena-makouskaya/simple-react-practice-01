import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Accordion/Rating/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title="This is APP component"/>

      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Rating value={0}/>
      <Accordion titleValue="Menu"/>
      <Accordion titleValue="Users"/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h3>{props.title}</h3>
}

export default App;
