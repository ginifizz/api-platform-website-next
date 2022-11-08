import React from "react";
import classnames from "classnames";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  size?: "small" | "large";
  className?: string;
  empty?: boolean;
  disabled?: boolean;
  to?: string;
  external?: boolean;
}

const Button: React.ComponentType<ButtonProps> = ({
  children,
  className,
  empty,
  disabled,
  to,
  size = "large",
  external = false,
  ...props
}) => {
  const classNames = classnames(
    "btn cursor-pointer",
    { small: "small" === size, empty, disabled },
    className
  );
  const externalProps = { target: "_blank", rel: "noopener noreferrer" };

  return to ? (
    <Link href={to} {...(external ? externalProps : {})}>
      <div className={classNames}>{children}</div>
    </Link>
  ) : (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Button;
