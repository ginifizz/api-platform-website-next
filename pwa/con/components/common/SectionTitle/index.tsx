import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps extends PropsWithChildren {
  dark?: boolean;
  lined?: boolean;
  h1?: boolean;
  small?: boolean;
  titleFatWeight?: boolean;
}

const SectionTitle = ({
  children,
  dark = false,
  lined = false,
  h1 = false,
  small = false,
  titleFatWeight = false,
}: SectionTitleProps) => (
  <div
    className={classnames(
      "relative text-center pt-20 pb-7 w-screen overflow-hidden",
      styles.title,
      dark ? "text-white" : "text-blue-black"
    )}
  >
    {h1 ? (
      <h1
        className={classnames(
          "absolute select-none z-0 w-[200%] left-1/2 bottom-16 -translate-x-1/2 scale-[2] text-6xl",
          dark ? "text-pink/20" : "text-blue/10"
        )}
      >
        {children}
      </h1>
    ) : (
      <h2
        className={classnames(
          "absolute select-none z-0 w-[200%] left-1/2 bottom-16 -translate-x-1/2 scale-[2] text-6xl",
          dark ? "text-pink/20" : "text-blue/10"
        )}
      >
        {children}
      </h2>
    )}
    <div
      className={classnames(
        "relative text-5xl | sm:text-6xl",
        titleFatWeight && "font-black",
        { lined }
      )}
    >
      {children}
    </div>
  </div>
);

export default SectionTitle;
