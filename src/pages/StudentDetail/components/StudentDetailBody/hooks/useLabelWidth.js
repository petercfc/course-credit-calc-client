import { useState } from "react";
import ReactDOM from "react-dom";

const useLabelWidth = inputLabelRef => {
  const [labelWidth, setLabelWidth] = useState(0);

  const changeLabelWidth = () => {
    console.log("inputLabelRef", inputLabelRef);
    if (inputLabelRef.current != null) {
      setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
      console.log(
        "set label width",
        ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth
      );
    }
  };

  return {
    labelWidth,
    changeLabelWidth
  };
};

export default useLabelWidth;
