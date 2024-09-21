import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accodionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [switchOn, setSwitchOn] = useState<boolean>(false); 

  const setRatingValueHandler = () => {
    setRatingValue(ratingValue);
  };

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue} />

      <UncontrolledRating />

      <Accordion
        titleValue="Accordion"
        collapsed={accodionCollapsed}
        onChange={() => setAccordionCollapsed(!accodionCollapsed)}
      />

      <OnOff on={switchOn} onChange={setSwitchOn}/>
      <OnOff on={switchOn} onChange={setSwitchOn}/>

      <UncontrolledOnOff onChange={setSwitchOn}/>
      <UncontrolledOnOff onChange={setSwitchOn}/>

    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h3>{props.title}</h3>;
}

export default App;
