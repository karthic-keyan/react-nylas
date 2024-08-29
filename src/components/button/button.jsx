import { buttonStyle } from "../style";

export const Button = ({ text, rest }) => {
  return (
    <button {...rest} className={buttonStyle}>
      {text}
    </button>
  );
};
