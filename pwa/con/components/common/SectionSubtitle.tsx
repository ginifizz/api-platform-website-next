import React, { PropsWithChildren } from "react";
import classnames from "classnames";

interface SectionSubtitleProps extends PropsWithChildren {
  dark?: boolean;
}

const SectionSubTitle: React.ComponentType<SectionSubtitleProps> = ({
  children,
  dark = false,
}) => (
  <p className={classnames("text-2xl font-raleway font-light text-center mb-10 opacity-60", dark ? "text-white" : "text-blue-black")}>{children}</p>
);

export default SectionSubTitle;

