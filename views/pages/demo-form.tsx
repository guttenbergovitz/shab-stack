import { Fragment, h } from "hono/jsx";


interface DemoFormProps {
  lang?: string;
  errors?: Record<string, string>;
  values?: { name: string; email: string };
  formSubmitting?: boolean;
}

export default function DemoForm(props: DemoFormProps) {
  const { lang = "en", errors = {}, values = { name: "", email: "" }, formSubmitting = false } = props;
  const postPath = `/${lang}/demo/form`;

  return (
    <form hx-post={postPath} hx-target="#form-message" hx-swap="beforeend">
      <div style="margin-bottom: 1rem;">
        <label htmlFor="name" style="display: block; margin-bottom: 0.25rem;">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={values.name}
          required
          style={`width: 100%; padding: 0.5rem; border: 1px solid ${errors.name ? "#f56565" : "#ccc"}; border-radius: 4px; font-size: 1rem;`}
        />
        {errors.name && (
          <p style="color: #f56565; font-size: 0.85rem; margin-top: 0.25rem;">
            {errors.name}
          </p>
        )}
      </div>

      <div style="margin-bottom: 1rem;">
        <label htmlFor="email" style="display: block; margin-bottom: 0.25rem;">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          value={values.email}
          required
          style={`width: 100%; padding: 0.5rem; border: 1px solid ${errors.email ? "#f56565" : "#ccc"}; border-radius: 4px; font-size: 1rem;`}
        />
        {errors.email && (
          <p style="color: #f56565; font-size: 0.85rem; margin-top: 0.25rem;">
            {errors.email}
          </p>
        )}
      </div>

      <button type="submit" class="btn btn-primary">
        {formSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
