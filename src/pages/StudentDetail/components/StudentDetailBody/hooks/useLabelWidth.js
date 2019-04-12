import { useState } from "react";
import ReactDOM from "react-dom";

const useLabelWidth = inputLabelRef => {
  const [labelWidth, setLabelWidth] = useState(0);

  const changeLabelWidth = () => {
    if (inputLabelRef.current != null) {
      setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
    }
  };

  return {
    labelWidth,
    changeLabelWidth
  };
};

export default useLabelWidth;
