import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating,  RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  const setRatingValueHandler = () => {
    setRatingValue(ratingValue);
  }

  return (
    <div className="App">

      <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledRating />
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
