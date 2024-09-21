import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(true);

  const setCollapsedHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={setCollapsed}
        collapsed={collapsed}
      />

      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  collapsed: boolean;
  onClick: (value: boolean) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {

  const onClickHandler = () => {
    props.onClick(!props.collapsed)
  }
  return (
    <h3 >
      {props.title} <span onClick={onClickHandler}>{

        props.collapsed 
        ? 
        "+" 
        : 
        "-"
        
        }</span>
    </h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
