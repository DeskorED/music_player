import { ReactElement } from "react";

interface ButtonProps {
  className: string | undefined;
  child: string | ReactElement | undefined;
}

export const Button = ({ className, child }: ButtonProps): JSX.Element => {
  return <button className={className}> {child} </button>;
};
