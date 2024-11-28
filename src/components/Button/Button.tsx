import Link from "next/link";
import { FC, ButtonHTMLAttributes } from "react";

import type { UrlObject } from "url";
type Url = string | UrlObject;

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: "black" | "white" | "red";
  link?: Url;
}

const Button: FC<ButtonProps> = ({
  children,
  link,
  className,
  color = "black",
  ...props
}) => {
  const btnStyle =
    "inline-flex h-12 px-4 items-center rounded whitespace-nowrap font-medium";

  const classList = [btnStyle];

  let colorStyle;

  switch (color) {
    case "black": {
      colorStyle = "bg-black text-white";
      break;
    }
    case "white": {
      colorStyle = "bg-white text-black";
      break;
    }
    case "red": {
      colorStyle = "bg-red-500 text-white";
      break;
    }
  }

  if (className) {
    classList.push(className);
  }

  if (color) {
    classList.push(colorStyle);
  }

  if (link) {
    return (
      <Link className={classList.join(" ")} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classList.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
