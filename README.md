# SHAB Stack

**S**SR + **H**TMX + **A**lpine + **B**un = HTML over the wire. No SPA. No illusions.

A proof-of-concept website demonstrating server-driven HTML architecture with modern tooling. This is what web development looks like when you stop pretending the browser is a JVM.

## What is SHAB?

- **S – SSR (Server-Side Rendering)**: HTML is generated on the server. Period. No hydration ceremony, no JavaScript rehydration tax.
- **H – HTMX**: Intercept HTTP requests at the JavaScript level and swap DOM fragments. Navigation feels instant. Forms submit cleanly. No JSON API complexity.
- **A – Alpine.js**: Tiny reactive library (16KB) for local interactivity only. Menu toggles, loading spinners, inline edit modes. Not for rendering, routing, or state management.
- **B – Bun**: Modern JavaScript runtime. Fast startup, native JSX support, built-in TypeScript. No Node.js. No package manager bloat.

## Architecture

```
server.tsx                 # Hono server (single entry point)
views/
  layout.tsx              # HTML layout with header, nav, footer
  pages/
    home.tsx              # Routes return JSX components
    manifesto.tsx         # Rendered to HTML strings
    about.tsx             # Sent as Content-Type: text/html
    demo.tsx              # HTMX and Alpine interactions
views/public/
  styles.css              # Simple CSS (no PostCSS, no SCSS)
  htmx.js                 # CDN script (https://unpkg.com/htmx.org)
  alpine.js               # CDN script (https://unpkg.com/alpinejs)
```

## Running

```bash
# Install dependencies
bun install

# Development (auto-reload)
bun run dev

# Production
bun start
```

Visit: **http://localhost:3000**

## How it works

### 1. Server renders HTML

```tsx
app.get("/:lang/manifesto", (c) => {
  const lang = c.get("lang");
  return c.html(
    <Layout lang={lang} page="manifesto">
      <Manifesto lang={lang} />
    </Layout>
  );
});
```

The server receives a request, runs JSX through the component tree, and sends HTML. The browser receives a valid HTML document and renders it immediately. No JavaScript needed for initial paint.

### 2. HTMX intercepts navigation

```html
<nav hx-boost="true">
  <a href="/en/demo">Demo</a>  <!-- hx-boost makes this AJAX -->
</nav>
```

When a user clicks a link, HTMX intercepts the HTTP request (instead of a full page reload), sends it via XHR, and swaps the response into the DOM using `hx-swap="innerHTML"`. The browser's back/forward buttons still work. No client-side router.

### 3. Forms submit to the server

```html
<form hx-post="/en/demo/form" hx-target="#message">
  <input type="text" name="email" required />
  <button type="submit">Submit</button>
</form>
```

When a form is posted, HTMX sends the data. The server validates, processes, and sends back HTML (not JSON). HTMX swaps it in. If validation fails, the server sends the form with error messages. The browser just displays it.

### 4. Alpine handles ephemeral state

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Hidden content</div>
</div>
```

Alpine is loaded from a CDN and instantly provides reactivity for UI state that doesn't need server coordination. Menu toggles, visibility states, loading spinners. No build step. Just add `x-` attributes to HTML.

## Why this is not a SPA

- **No client-side routing**: Every page transition is an HTTP request.
- **No hydration**: HTML is ready to display immediately. Zero JavaScript execution needed to show the initial page.
- **No JSON API**: The server responds with HTML, not data structures.
- **No JavaScript build pipeline**: No bundler, no tree-shaking, no code splitting. `bun run` and you're done.
- **No state management library**: The server is the source of truth.

## Why this works

1. **HTTP is well-designed**: GET, POST, status codes, caching headers. We've been trying to hide it. This doesn't.
2. **The browser is fast at rendering HTML**: It's literally its job. Faster than parsing JSON and running JavaScript to render DOM nodes.
3. **HTMX is tiny and boring**: 14KB. No magic. Just AJAX with HTML instead of JSON.
4. **Alpine is boring**: 16KB. Local interactivity only. No global state. No lifecycle hooks you have to memorize.
5. **Bun is fast**: Startup and execution measured in milliseconds, not seconds.

## Comparison to Next.js

| Aspect | SHAB | Next.js / SPA |
|--------|------|---------------|
| **Build** | None. `bun run` | webpack/turbopack + config files |
| **JS sent to browser** | ~30KB (HTMX + Alpine CDN) | 100KB–500KB+ (after tree-shaking) |
| **First Paint** | ~50ms | 2–5 seconds (JS parsing + hydration) |
| **Routing** | Server-side. HTTP requests. | Client-side. JavaScript router. |
| **Forms** | HTTP POST → HTML → DOM swap | Prevent default + state update + re-render |
| **APIs** | Server renders HTML directly | JSON endpoint + client-side template rendering |
| **Complexity** | Server-side templating | State management + hooks + hydration strategy |

Next.js excels at:
- Complex interactive UIs (animations, drag-and-drop)
- Offline-first apps
- Highly dynamic content (real-time collaboration)
- Serving multiple clients (web, mobile API)

SHAB is better for:
- Content sites (blogs, docs, dashboards)
- Traditional web applications
- Server-driven architectures
- Teams that want simplicity

## Key files

- **server.tsx**: Hono app with middleware, routes, and HTMX endpoints.
- **views/layout.tsx**: HTML layout with nav, header, footer.
- **views/pages/*.tsx**: Page components rendered to HTML strings.
- **public/styles.css**: Minimal CSS (no build step).

## Demo features

- **Navigation**: HTMX `hx-boost` on links. No page reload. Smooth transitions.
- **Form validation**: Server-side. Validation errors returned as HTML.
- **Inline editing**: Alpine toggles edit mode. HTMX submits to server.
- **Fragment swapping**: HTMX targets specific divs and swaps partial content.

## What's missing (intentionally)

- i18n: Only English content (though URL prefix `/en`, `/pl` exist for routing).
- Database: This is a PoC. No persistence layer.
- Authentication: Not implemented, but compatible with session cookies + server-side checks.
- Real-time: Not a goal. HTMX + Server Request/Response is synchronous by design.

## Running this in production

1. Use `bun build server.tsx --outfile dist/server.js` to pre-compile if desired (not required).
2. Set a process manager (pm2, systemd, Docker).
3. Set environment variables (PORT, NODE_ENV).
4. Serve static files with a CDN or nginx in front.

## Extending SHAB

Add a database:
```tsx
const db = await connectDB(process.env.DATABASE_URL);
app.post("/submit", async (c) => {
  const data = await c.req.formData();
  await db.insert(data);
  return c.html(<div>✓ Saved</div>);
});
```

Add a service:
```tsx
const result = await emailService.send({
  to: email,
  subject: "Welcome",
});
return c.html(<SuccessMessage />);
```

Add middleware:
```tsx
app.use(authMiddleware); // Check session cookies
app.use(rateLimitMiddleware); // Rate limit per IP
```

All of it stays on the server. The browser still just renders HTML.

## Philosophy

> The web was solved in 1999. We've been complicating it ever since.

SHAB is not innovation. It's archaeology. Digging up REST principles, HTML-over-the-wire patterns, and classical web architecture that worked for decades. We wrapped it in modern tooling (Bun, HTMX, Alpine) so it works in 2025.

The reason this feels radical is that we spent 15 years building the exact opposite. But the reason it feels good is that HTTP and HTML are not mistakes. We were just convinced they were.

## Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts. Vercel will:
   - Detect the project
   - Install Bun runtime
   - Build and deploy

### Manual Deployment

For any Node.js-compatible platform:

1. Install Bun on the server
2. Clone the repository
3. Run `bun install`
4. Run `bun run server.tsx`
5. Set `PORT` environment variable if needed

### Environment Variables

- `PORT` - Server port (default: 3000)

## Resources

- [Hono docs](https://hono.dev)
- [HTMX docs](https://htmx.org)
- [Alpine.js docs](https://alpinejs.dev)
- [Bun docs](https://bun.sh)

---

**No SPA. No hydration. No JavaScript build pipeline. Just HTTP and HTML.**
