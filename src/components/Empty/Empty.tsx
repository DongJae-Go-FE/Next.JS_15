import { FC, HTMLAttributes, ReactElement } from "react";

export type HUIInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icons?: ReactElement;
  description?: string;

  /**
   * @default "md"
   */
  size?: Exclude<HUIInputSize, "xs" | "sm" | "xl">;
}

const Empty: FC<Props> = ({
  icons,
  description = "Description",
  size = "md",
  className,
  ...props
}) => {
  const classList = ["hui-empty", `${size}`];

  if (className) {
    classList.push(className);
  }

  return (
    <div className={classList.join(" ")} {...props}>
      {icons !== undefined ? (
        icons
      ) : (
        <svg>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.44365 8.44365C12.4227 4.46462 17.9254 2 24 2C30.0746 2 35.5773 4.46462 39.5564 8.44365C43.5354 12.4227 46 17.9254 46 24C46 30.0746 43.5354 35.5773 39.5564 39.5564C35.5773 43.5354 30.0746 46 24 46C17.9254 46 12.4227 43.5354 8.44365 39.5564C4.46462 35.5773 2 30.0746 2 24C2 17.9254 4.46462 12.4227 8.44365 8.44365ZM24 6C19.0289 6 14.5316 8.01253 11.2721 11.2721C8.01253 14.5316 6 19.0289 6 24C6 28.9711 8.01253 33.4684 11.2721 36.7279C14.5316 39.9875 19.0289 42 24 42C28.9711 42 33.4684 39.9875 36.7279 36.7279C39.9875 33.4684 42 28.9711 42 24C42 19.0289 39.9875 14.5316 36.7279 11.2721C33.4684 8.01253 28.9711 6 24 6Z"
            fill="#999"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z"
            fill="#999"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 10C25.1046 10 26 10.8954 26 12V28C26 29.1046 25.1046 30 24 30C22.8954 30 22 29.1046 22 28V12C22 10.8954 22.8954 10 24 10Z"
            fill="#999"
          ></path>
        </svg>
      )}
      <p>{description}</p>
    </div>
  );
};

export default Empty;
