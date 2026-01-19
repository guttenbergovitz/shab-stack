interface ButtonProps {
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "danger";
  children: any;
  onClick?: string;
  hxGet?: string;
  hxPost?: string;
  hxTarget?: string;
  hxSwap?: string;
  class?: string;
}

export default function Button({ 
  href, 
  type = "button", 
  variant = "primary", 
  children, 
  onClick,
  hxGet,
  hxPost,
  hxTarget,
  hxSwap,
  class: className
}: ButtonProps) {
  const variantClass = variant === "primary" ? "btn-primary" : variant === "danger" ? "btn-danger" : "btn-secondary";
  const classes = `btn ${variantClass} ${className || ""}`;

  if (href) {
    return (
      <a href={href} class={classes} hx-get={hxGet} hx-target={hxTarget} hx-swap={hxSwap}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      class={classes}
      hx-on={onClick}
      hx-get={hxGet}
      hx-post={hxPost}
      hx-target={hxTarget}
      hx-swap={hxSwap}
    >
      {children}
    </button>
  );
}
