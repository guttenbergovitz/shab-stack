import { t } from "../../i18n";

interface DemoProps {
  lang: string;
}

export default function Demo({ lang }: DemoProps) {
  const categories = [
    {
      id: "forms",
      title: "Forms & Validation",
      demos: [
        { id: "form", title: "Form Submission", desc: "Server-side validation with inline error messages" },
        { id: "edit", title: "Inline Edit", desc: "Click to edit, swap between view and edit mode" },
      ]
    },
    {
      id: "crud",
      title: "CRUD & State",
      demos: [
        { id: "todos", title: "Todo List (HATEOAS)", desc: "Full CRUD with server-driven state and actions" },
        { id: "delete", title: "Delete Confirmation", desc: "Two-step delete with server confirmation" },
      ]
    },
    {
      id: "ui",
      title: "UI Patterns",
      demos: [
        { id: "fragment", title: "Fragment Swapping", desc: "Update only part of the page without full reload" },
        { id: "loading", title: "Loading States", desc: "Show spinners during async operations" },
        { id: "search", title: "Live Search", desc: "Debounced search with instant results" },
        { id: "sorting", title: "Table Sorting", desc: "Click headers to sort, server handles logic" },
      ]
    },
    {
      id: "realtime",
      title: "Real-time & Streaming",
      demos: [
        { id: "realtime", title: "Polling Updates", desc: "Auto-refresh content every N seconds" },
        { id: "infinite", title: "Infinite Scroll", desc: "Load more on scroll with intersection observer" },
      ]
    },
    {
      id: "advanced",
      title: "Advanced",
      demos: [
        { id: "editor", title: "Rich Text Editor", desc: "WYSIWYG editor with formatting toolbar" },
        { id: "drag", title: "Drag & Drop Upload", desc: "File upload with drag-and-drop interface" },
      ]
    }
  ];

  return (
    <div class="demo-page-layout">
      {/* Sidebar Navigation */}
      <aside class="demo-sidebar">
        <div class="demo-sidebar-sticky">
          <h3>Examples</h3>
          <nav class="demo-nav">
            {categories.map(cat => (
              <div key={cat.id} class="demo-nav-category">
                <a href={`#${cat.id}`} class="demo-nav-category-title">{cat.title}</a>
                <div class="demo-nav-items">
                  {cat.demos.map(demo => (
                    <a key={demo.id} href={`#${demo.id}`} class="demo-nav-item">
                      {demo.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main class="demo-main">
        <div class="hero">
          <h2>{t(lang, "demo.title")}</h2>
          <p class="subtitle">{t(lang, "demo.subtitle")}</p>
        </div>

        {/* Demo Categories */}
        {categories.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id} class="demo-category">
            <h3 class="demo-category-title">
              <span class="demo-category-number">{catIdx + 1}</span>
              {cat.title}
            </h3>
            
            <div class="demo-grid">
              {cat.demos.map((demo, demoIdx) => (
                <article key={demo.id} id={demo.id} class="demo-card">
                  <div class="demo-card-header">
                    <span class="demo-number">{catIdx + 1}.{demoIdx + 1}</span>
                    <h4>{demo.title}</h4>
                  </div>
                  <p class="demo-card-desc">{demo.desc}</p>
                  <button
                    type="button"
                    hx-get={`/${lang}/demo/open/${demo.id}`}
                    hx-target="#demo-modal"
                    hx-swap="innerHTML"
                    class="btn btn-primary"
                  >
                    Try it →
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Key Concepts Section */}
        <section class="demo-concepts">
          <h3>{t(lang, "demo.whatThisDemons.title")}</h3>
          <div class="concepts-grid">
            {(t(lang, "demo.whatThisDemons.items") as any[]).map((item: any, idx: number) => (
              <div key={`concept-${idx}`} class="concept-card">
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
