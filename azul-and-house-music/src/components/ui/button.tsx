import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-stone-900 text-cream hover:bg-stone-800",
        outline:
          "border border-stone-900/20 bg-transparent text-stone-900 hover:border-stone-900/50",
        ghost: "text-stone-600 hover:text-stone-900",
        whatsapp: "bg-[#1a3d2e] text-cream hover:bg-[#245241]",
      },
      size: {
        default: "h-12 px-8",
        lg: "h-14 px-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, href, external, children, disabled, ...props },
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
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (disabled) e.preventDefault();
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
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        type="button"
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
