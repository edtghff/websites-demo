import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-red-700 text-white hover:bg-red-600 active:scale-[0.98]",
        outline:
          "border border-white/20 bg-transparent text-white hover:border-red-600 hover:text-red-500",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/5",
        secondary:
          "bg-white text-black hover:bg-white/90 active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      external,
      children,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      buttonVariants({ variant, size, className }),
      disabled && "pointer-events-none opacity-50"
    );

    if (href) {
      const anchorProps = {
        className: classes,
        "aria-disabled": disabled || undefined,
        tabIndex: disabled ? -1 : undefined,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (disabled) e.preventDefault();
          (
            props as React.AnchorHTMLAttributes<HTMLAnchorElement>
          ).onClick?.(e);
        },
      };

      if (external || href.startsWith("http") || href.startsWith("tel:")) {
        return (
          <a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            {...anchorProps}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        type={type ?? "button"}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
