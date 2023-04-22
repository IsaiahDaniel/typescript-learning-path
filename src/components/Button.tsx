import React from "react";
import "./button.css";

type ButtonType = {
  title: string;
  buttontype: "button" | "submit" | "reset";
  classNames?: any;
};

// const Button = (props: ButtonType) => {
//   return (
//     <button type={props.buttontype} style={props.classNames}>
//         { props.title }
//     </button>
//   )
// }

const Button = ({ buttontype, classNames, title }: ButtonType) => {
  return (
    <button type={buttontype} style={classNames}>
      {title}
    </button>
  );
};

export default Button;
