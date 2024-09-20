import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    <div className="App">
      <PageTitle title="This is APP component"/>


      <Accordion titleValue="Menu" collapsed={true}/>
      <Rating value={1}/>
      <Accordion titleValue="Users" collapsed={false}/>

      <OnOff />

      <UncontrolledAccordion titleValue="Uncontrolled Accordion" collapsed={true}/>
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
