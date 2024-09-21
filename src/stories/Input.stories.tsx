import { ChangeEvent, useRef, useState } from "react";

export default {
  title: "Input",
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />{" "}
      - {value}
    </>
  );
};

export const GetValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        value={value}
      />
      <button
        onClick={save}
      >
        {" "}
        Save{" "}
      </button>
      - {value}
    </>
  );
};

export const ControlledInputWithFixedValue = () => (
  <input value={"Input Value"} />
);
