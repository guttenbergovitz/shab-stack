export default function Docs({ lang }: { lang: string }) {
  const codeSSR = `app.get("/users/:id", async (c) => {
  const user = await db.getUser(c.req.param("id"));
  return c.html(
    <Layout>
      <h1>\${user.name}</h1>
      <p>\${user.email}</p>
    </Layout>
  );
});`;

  const codeHTMX = `<a href="/users" hx-boost="true">View Users</a>`;
  
  const codeHTMXForm = `<form hx-post="/users" hx-target="#result">
  <input name="name" />
  <button type="submit">Create</button>
</form>
<div id="result"></div>`;

  const codeAlpine = `<div x-data="\\{ open: false \\}">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>`;

  const codeRouting = `app.get("/", (c) => c.html(<Home />));
app.get("/about", (c) => c.html(<About />));
app.post("/contact", async (c) => {
  const data = await c.req.formData();
  return c.html(<Success />);
});`;

  const codeForms = `app.post("/login", async (c) => {
  const data = await c.req.formData();
  const email = data.get("email");
  const password = data.get("password");
  
  if (!email) {
    return c.html(<LoginForm error="Email required" />);
  }
  
  const user = await auth.login(email, password);
  return c.html(<Dashboard user=\${user} />);
});`;

  const codeValidation = `const errors = \\{\\};
if (!name) errors.name = "Required";
if (!email.includes("@")) errors.email = "Invalid";

if (Object.keys(errors).length > 0) {
  return c.html(<Form errors=\${errors} values=\\{\\{ name, email \\}\\} />);
}`;

  return (
    <div class="docs-page">
      <div class="hero">
        <h2>Documentation</h2>
        <p class="subtitle">Everything you need to build with SHAB Stack</p>
      </div>

      <div class="docs-grid">
        <aside class="docs-sidebar">
          <nav class="docs-nav">
            <div class="docs-nav-section">
              <h4>Getting Started</h4>
              <a href="#quick-start" class="docs-nav-link">Quick Start</a>
              <a href="#installation" class="docs-nav-link">Installation</a>
              <a href="#project-structure" class="docs-nav-link">Project Structure</a>
            </div>
            <div class="docs-nav-section">
              <h4>Core Concepts</h4>
              <a href="#ssr" class="docs-nav-link">Server-Side Rendering</a>
              <a href="#hono" class="docs-nav-link">Why Hono?</a>
              <a href="#htmx" class="docs-nav-link">HTMX Integration</a>
              <a href="#alpine" class="docs-nav-link">Alpine.js Usage</a>
              <a href="#routing" class="docs-nav-link">Routing</a>
            </div>
            <div class="docs-nav-section">
              <h4>Philosophy</h4>
              <a href="#disclaimer" class="docs-nav-link">Important Disclaimer</a>
              <a href="#when-to-use" class="docs-nav-link">When to Use SHAB</a>
            </div>
            <div class="docs-nav-section">
              <h4>Advanced</h4>
              <a href="#forms" class="docs-nav-link">Form Handling</a>
              <a href="#validation" class="docs-nav-link">Validation</a>
              <a href="#hateoas" class="docs-nav-link">HATEOAS Pattern</a>
              <a href="#state" class="docs-nav-link">Managing State</a>
              <a href="#patterns" class="docs-nav-link">Common Patterns</a>
              <a href="#deployment" class="docs-nav-link">Deployment</a>
            </div>
          </nav>
        </aside>

        <main class="docs-content">
          <section id="quick-start" class="docs-section">
            <h3>Quick Start</h3>
            <p>Get up and running with SHAB Stack in under 2 minutes.</p>
            <pre><code>bun create shab-app my-app{'\n'}cd my-app{'\n'}bun install{'\n'}bun dev</code></pre>
            <p>That's it. No webpack config. No babel. No tsconfig gymnastics. Just a server that renders HTML.</p>
          </section>

          <section id="installation" class="docs-section">
            <h3>Installation</h3>
            <p>SHAB requires Bun. Install it first:</p>
            <pre><code>curl -fsSL https://bun.sh/install | bash</code></pre>
            <p>Then clone the starter template:</p>
            <pre><code>git clone https://github.com/shabstack/starter my-app{'\n'}cd my-app{'\n'}bun install</code></pre>
            <p>Dependencies: <code>hono</code> for routing. That's it. HTMX and Alpine load from CDN.</p>
          </section>

          <section id="project-structure" class="docs-section">
            <h3>Project Structure</h3>
            <pre><code>my-app/{'\n'}├── server.tsx{'\n'}├── views/{'\n'}│   ├── layout.tsx{'\n'}│   └── pages/{'\n'}│       ├── home.tsx{'\n'}│       └── about.tsx{'\n'}├── public/{'\n'}│   └── styles.css{'\n'}└── package.json</code></pre>
            <p>No <code>src/</code>, no <code>dist/</code>, no <code>build/</code>. Just files that run.</p>
          </section>

          <section id="ssr" class="docs-section">
            <h3>Server-Side Rendering</h3>
            <p>Every route returns HTML. The server has all the data. It renders the complete page and sends it.</p>
            <pre><code>{codeSSR}</code></pre>
            <p>No <code>getServerSideProps</code>. No hydration. Just render and send.</p>
          </section>

          <section id="hono" class="docs-section">
            <h3>Why Hono?</h3>
            <p>Hono is a small, fast web framework for Bun, Deno, and Node.js. It's like Express, but modern and actually fast.</p>
            <p>Key features:</p>
            <ul>
              <li><strong>Tiny:</strong> 12KB. No dependencies.</li>
              <li><strong>Fast:</strong> Built for edge runtimes. Optimized for Bun.</li>
              <li><strong>TypeScript-first:</strong> Full type inference for routes and context.</li>
              <li><strong>JSX support:</strong> Render JSX directly without React.</li>
            </ul>
            <p>Hono lets you write <code>c.html(&lt;Component /&gt;)</code> and it just works. No build step. No React. Just JSX as a templating language.</p>
            <pre><code>{`app.get("/", (c) => {
  return c.html(
    <html>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  );
});`}</code></pre>
            <p>It's the simplest way to do server-side JSX in 2025.</p>
          </section>

          <section id="htmx" class="docs-section">
            <h3>HTMX Integration</h3>
            <p>HTMX intercepts links and forms, sends requests to the server, and swaps the HTML response into the page.</p>
            <pre><code>{codeHTMX}</code></pre>
            <p>The link works like normal, but HTMX prevents the full page reload and swaps just the content.</p>
            <p>For forms:</p>
            <pre><code>{codeHTMXForm}</code></pre>
            <p>Server validates, responds with HTML. HTMX swaps it into <code>#result</code>.</p>
          </section>

          <section id="alpine" class="docs-section">
            <h3>Alpine.js Usage</h3>
            <p>Use Alpine for local, ephemeral UI state. Dropdowns, modals, toggles.</p>
            <pre><code>{codeAlpine}</code></pre>
            <p>Alpine runs in the browser. It doesn't talk to the server. It just manages UI state.</p>
            
            <h4 style="margin-top: 2rem; color: #8b7355;">Alpine.js in Hono JSX</h4>
            <p>Hono JSX doesn't support <code>:</code> or <code>@</code> in attribute names. Use <code>dangerouslySetInnerHTML</code> for Alpine components:</p>
            <pre><code>{`<div dangerouslySetInnerHTML={{__html: \`
  <div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open">Content</div>
  </div>
\`}}></div>`}</code></pre>
            
            <p><strong>Why?</strong> JSX parsers treat <code>@click</code> and <code>:class</code> as invalid syntax. By using raw HTML strings, we bypass the JSX parser entirely.</p>
            
            <h4 style="margin-top: 2rem; color: #8b7355;">Alpine Directives</h4>
            <ul style="margin-left: 1.5rem; line-height: 1.8;">
              <li><code>x-data</code> - Initialize component state</li>
              <li><code>@click</code> or <code>x-on:click</code> - Handle events</li>
              <li><code>x-show</code> - Toggle visibility (display: none)</li>
              <li><code>x-if</code> - Conditional rendering (removes from DOM)</li>
              <li><code>:class</code> or <code>x-bind:class</code> - Dynamic classes</li>
              <li><code>x-text</code> - Set text content</li>
              <li><code>x-cloak</code> - Hide until Alpine loads</li>
              <li><code>@click.outside</code> - Close on outside click</li>
            </ul>
            
            <h4 style="margin-top: 2rem; color: #8b7355;">Example: Dropdown</h4>
            <pre><code>{`<div dangerouslySetInnerHTML={{__html: \`
  <div x-data="{ open: false }" @click.outside="open = false">
    <button @click="open = !open">Menu</button>
    <div x-show="open" x-cloak>
      <a href="/profile">Profile</a>
      <a href="/settings">Settings</a>
    </div>
  </div>
\`}}></div>`}</code></pre>
            
            <p><strong>Remember:</strong> Alpine is for UI state only. Server state belongs on the server. Don't fetch data with Alpine—use HTMX.</p>
            
            <h4 style="margin-top: 2rem; color: #8b7355;">Alpine Morph Extension</h4>
            <p>HTMX can use Alpine's morphing algorithm for smoother DOM updates. Instead of swapping HTML, it morphs the existing DOM to match the new HTML, preserving Alpine state and avoiding flicker.</p>
            <pre><code>{`<!-- Add Alpine Morph extension -->
<script src="https://unpkg.com/htmx.org@1.9.10/dist/ext/alpine-morph.js"></script>

<!-- Use it on elements -->
<div hx-get="/endpoint" hx-ext="alpine-morph" hx-swap="morph">
  <div x-data="{ count: 0 }">
    <button @click="count++">Count: <span x-text="count"></span></button>
  </div>
</div>`}</code></pre>
            <p><strong>When to use:</strong> When you have Alpine state that should persist across HTMX updates. The morph algorithm intelligently updates only what changed, keeping Alpine components alive.</p>
            <p><strong>Learn more:</strong> <a href="https://v1.htmx.org/extensions/alpine-morph/" target="_blank" rel="noopener">HTMX Alpine Morph Extension</a></p>
          </section>

          <section id="routing" class="docs-section">
            <h3>Routing</h3>
            <p>Routes are defined in <code>server.tsx</code> using Hono:</p>
            <pre><code>{codeRouting}</code></pre>
            <p>No client-side router. No route splitting. Just HTTP routes.</p>
          </section>

          <section id="forms" class="docs-section">
            <h3>Form Handling</h3>
            <p>Forms submit to the server. Server validates. Server responds with HTML.</p>
            <pre><code>{codeForms}</code></pre>
            <p>No client-side validation library. No form state manager. Just HTTP.</p>
          </section>

          <section id="validation" class="docs-section">
            <h3>Validation</h3>
            <p>Validate on the server. Return errors as HTML.</p>
            <pre><code>{codeValidation}</code></pre>
            <p>The form component renders error messages. No Yup. No Zod. Just conditionals.</p>
          </section>

          <section id="hateoas" class="docs-section">
            <h3>HATEOAS Pattern</h3>
            <p><strong>HATEOAS</strong> (Hypermedia As The Engine Of Application State) is a REST principle that means: <em>the server tells the client what actions are available.</em></p>
            <p>Instead of the client knowing all possible URLs and deciding which to call, the server sends HTML with links and forms that represent available actions.</p>
            <p><strong>Example: A todo item</strong></p>
            <pre><code>{`// Server decides what actions are available
app.get("/todos/:id", (c) => {
  const todo = db.getTodo(c.req.param("id"));
  
  return c.html(
    <div id={\`todo-\${todo.id}\`}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      
      {/* Server provides available actions */}
      {!todo.completed && (
        <button 
          hx-post={\`/todos/\${todo.id}/complete\`}
          hx-target={\`#todo-\${todo.id}\`}
        >
          Mark Complete
        </button>
      )}
      
      {todo.completed && (
        <button 
          hx-post={\`/todos/\${todo.id}/uncomplete\`}
          hx-target={\`#todo-\${todo.id}\`}
        >
          Mark Incomplete
        </button>
      )}
      
      <button 
        hx-delete={\`/todos/\${todo.id}\`}
        hx-target={\`#todo-\${todo.id}\`}
        hx-swap="outerHTML"
      >
        Delete
      </button>
    </div>
  );
});`}</code></pre>
            <p>The client doesn't need to know business logic. The server sends the appropriate buttons based on state. If a todo is completed, you can't complete it again—the button isn't there.</p>
            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Business logic stays on the server</li>
              <li>Client can't make invalid requests (buttons don't exist)</li>
              <li>UI automatically reflects available actions</li>
              <li>No client-side state management needed</li>
            </ul>
          </section>

          <section id="state" class="docs-section">
            <h3>Managing State</h3>
            <p>In SHAB Stack, state lives on the server. The database is your state manager.</p>
            <p><strong>Session state:</strong> Use cookies or server-side sessions.</p>
            <pre><code>{`import { getCookie, setCookie } from 'hono/cookie';

app.get("/cart", (c) => {
  const cartId = getCookie(c, "cart_id");
  const cart = db.getCart(cartId);
  return c.html(<CartView items={cart.items} />);
});

app.post("/cart/add", async (c) => {
  const cartId = getCookie(c, "cart_id") || createNewCart();
  const data = await c.req.formData();
  const productId = data.get("product_id");
  
  db.addToCart(cartId, productId);
  setCookie(c, "cart_id", cartId);
  
  const cart = db.getCart(cartId);
  return c.html(<CartView items={cart.items} />);
});`}</code></pre>
            <p><strong>URL state:</strong> Use query parameters for filters, pagination, sorting.</p>
            <pre><code>{`app.get("/products", (c) => {
  const page = Number(c.req.query("page") || "1");
  const sort = c.req.query("sort") || "name";
  const filter = c.req.query("filter") || "";
  
  const products = db.getProducts({ page, sort, filter });
  
  return c.html(
    <div>
      <ProductList products={products} />
      <Pagination 
        page={page} 
        total={products.total}
        sort={sort}
        filter={filter}
      />
    </div>
  );
});`}</code></pre>
            <p>The URL is your state. Bookmark it, share it, refresh it—it works.</p>
          </section>

          <section id="patterns" class="docs-section">
            <h3>Common Patterns</h3>
            
            <h4>Optimistic UI</h4>
            <p>Show immediate feedback, then replace with server response:</p>
            <pre><code>{`<button 
  hx-post="/like"
  hx-swap="outerHTML"
  hx-target="this"
>
  <span class="htmx-indicator">Liking...</span>
  <span>Like</span>
</button>`}</code></pre>
            
            <h4>Polling</h4>
            <p>Auto-refresh content every N seconds:</p>
            <pre><code>{`<div 
  hx-get="/notifications"
  hx-trigger="every 5s"
  hx-swap="innerHTML"
>
  {notifications.map(n => <Notification {...n} />)}
</div>`}</code></pre>
            
            <h4>Lazy Loading</h4>
            <p>Load content when it enters viewport:</p>
            <pre><code>{`<div 
  hx-get="/comments"
  hx-trigger="intersect once"
  hx-swap="outerHTML"
>
  <p>Loading comments...</p>
</div>`}</code></pre>
            
            <h4>Debounced Search</h4>
            <p>Wait for user to stop typing:</p>
            <pre><code>{`<input 
  type="text"
  name="search"
  hx-get="/search"
  hx-trigger="keyup changed delay:300ms"
  hx-target="#results"
/>`}</code></pre>
            
            <h4>Confirm Before Delete</h4>
            <p>Use HTMX confirm:</p>
            <pre><code>{`<button 
  hx-delete="/items/123"
  hx-confirm="Are you sure?"
>
  Delete
</button>`}</code></pre>
          </section>

          <section id="deployment" class="docs-section">
            <h3>Deployment</h3>
            <p>Deploy anywhere that runs Bun:</p>
            <ul>
              <li><strong>Fly.io:</strong> <code>fly launch</code></li>
              <li><strong>Railway:</strong> Connect repo, set start command to <code>bun server.tsx</code></li>
              <li><strong>VPS:</strong> <code>bun server.tsx</code> behind nginx</li>
            </ul>
            <p>No separate frontend build. No API deployment. One process. One server.</p>
          </section>

          <section id="disclaimer" class="docs-section disclaimer-section">
            <h3>Important Disclaimer</h3>
            <p class="disclaimer-highlight"><strong>The objectively correct answer: Rust + WASM.</strong></p>
            <p>Leptos, Yew, Dioxus—these are the real future. Compile to WebAssembly. Run at native speed. Type safety that actually works. Zero garbage collection. No runtime overhead.</p>
            <p>Rust was designed for performance and safety. WASM runs in the browser faster than JavaScript ever will. This is what you should be using.</p>
            <p><strong>But you're not going to learn Rust.</strong></p>
            <p>Not because you can't. Because your team won't. Because your deadline is next month. Because explaining the borrow checker to your manager is not a conversation you're ready for.</p>
            <p class="disclaimer-highlight"><strong>So if Rust is off the table, what's next? Go + templ + HTMX is better. Python + FastAPI/Django + HTMX is better. Even PHP + Laravel + HTMX is probably better.</strong></p>
            <p>Those languages were designed for servers. They have mature ecosystems. They don't pretend the browser is a runtime. They don't need a build pipeline to run on the server.</p>
            <p>But here's the thing: <strong>if you're a JavaScript/TypeScript developer</strong>, if you've been doing Next.js or React for years, if your team knows JSX and TypeScript and nothing else—this is your escape hatch.</p>
            <p>SHAB Stack proves you don't need to learn Go or Python to escape the SPA hellscape. You can keep your TypeScript. You can keep your JSX. You can keep your tooling. You just stop sending it to the browser.</p>
            <p>This is not the best way to build web apps. It's the best way to build web apps <em>if you're stuck in the JavaScript ecosystem and want out of the framework madness.</em></p>
            <p>Think of SHAB as a halfway house. You're not ready to leave JavaScript entirely, but you're done with React's bullshit. This is that middle ground.</p>
            <p class="disclaimer-highlight"><strong>The ideal path? Learn Rust. Use Leptos. Build WASM apps. But we live in the real world.</strong></p>
            <p>You have deadlines. You have a team that knows JavaScript. You have a codebase to maintain. Throwing pearls before swine is pointless.</p>
            <p>If you're here because you're tired of debugging hydration mismatches and you just want to ship HTML? Welcome. You're in the right place.</p>
          </section>

          <section id="when-to-use" class="docs-section">
            <h3>When to Use SHAB</h3>
            <p><strong>Use SHAB when:</strong></p>
            <ul>
              <li>You're a JS/TS developer who wants to escape SPAs</li>
              <li>You're building content-heavy sites, dashboards, admin panels</li>
              <li>You want server-side rendering without the Next.js complexity</li>
              <li>You're tired of build pipelines and just want to write code</li>
              <li>Your team already knows TypeScript and JSX</li>
            </ul>
            <p><strong>Don't use SHAB when:</strong></p>
            <ul>
              <li>You're starting a new project and can choose any language (use Go or Python)</li>
              <li>You need real-time features like multiplayer games or collaborative editing</li>
              <li>You're building a highly interactive UI with complex animations</li>
              <li>You need offline-first capabilities</li>
            </ul>
            <p>SHAB is a pragmatic choice for JavaScript developers who want simplicity. It's not the ultimate solution. It's just better than what you're probably doing now.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
