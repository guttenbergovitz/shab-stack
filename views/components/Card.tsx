interface CardProps {
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    hxGet?: string;
    hxTarget?: string;
  };
  variant?: "default" | "feature";
}

export default function Card({ title, description, action, variant = "default" }: CardProps) {
  const cardClass = variant === "feature" ? "feature" : "demo-card";
  
  return (
    <article class={cardClass}>
      <h3>{title}</h3>
      <p class={variant === "default" ? "demo-card-desc" : ""}>{description}</p>
      {action && (
        <a 
          href={action.href} 
          hx-get={action.hxGet}
          hx-target={action.hxTarget}
          hx-swap="innerHTML"
          class="btn btn-primary"
        >
          {action.label}
        </a>
      )}
    </article>
  );
}
