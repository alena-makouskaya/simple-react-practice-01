import { useState } from "react";

type OnOffPropsType = {
//   on: boolean;
};

export function OnOff(props: OnOffPropsType) {

const [on, setOn] = useState(false)

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "4px",
    backgroundColor: on ? "white" : "red",
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "8px",
    backgroundColor: on ? "green" : "red",
  };

  const activateOn = () => {
    setOn(!on);
  }


  return (
    <div>
      <div style={onStyle} onClick={activateOn}>On</div>
      <div style={offStyle} onClick={activateOn}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
