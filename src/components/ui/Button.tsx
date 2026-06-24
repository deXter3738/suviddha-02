import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
};

type AnchorButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variants = {
  primary: "bg-primary text-background hover:bg-[#eadbb8]",
  outline: "border border-primary/30 text-text hover:bg-primary/10",
  ghost: "text-text hover:text-primary",
};

export function Button({ children, variant = "primary", fullWidth, icon, className = "", ...props }: ButtonProps) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-2 py-2 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;
  const content = (
    <>
      <span className="px-4">{children}</span>
      {icon ?? (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-primary transition-transform duration-300 group-hover:scale-105">
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
