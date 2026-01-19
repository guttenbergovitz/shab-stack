import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Layout from "./views/layout";
import Home from "./views/pages/home";
import Manifesto from "./views/pages/manifesto";
import About from "./views/pages/about";
import Demo from "./views/pages/demo";
import Docs from "./views/pages/docs";
import HowWeGotHere from "./views/pages/how-we-got-here";
import DemoForm from "./views/pages/demo-form";
import NotFound from "./views/pages/404";
import { t } from "./i18n";

type Variables = {
  lang: string;
  page: string;
};

const app = new Hono<{ Variables: Variables }>();

// Middleware: parse lang from URL
app.use("*", async (c, next) => {
  const pathParts = c.req.path.split("/").filter(Boolean);
  const firstPart = pathParts[0] || "en";
  const lang: string = ["en", "de", "fr", "pl"].includes(firstPart) ? firstPart : "en";
  c.set("lang", lang);
  
  // Determine page from route
  const routesObj = t(lang, "routes");
  const routes: Record<string, string> = typeof routesObj === 'object' && routesObj !== null ? routesObj : {};
  const routePart = pathParts[1] || "";
  
  let page = "home";
  for (const [key, value] of Object.entries(routes)) {
    if (value === routePart) {
      page = key;
      break;
    }
  }
  
  c.set("page", page);
  await next();
});

// Static files
app.use("/public/*", serveStatic({ root: "./" }));

// Routes
app.get("/", (c) => {
  return c.redirect("/en");
});

// Home page for any language
app.get("/:lang", (c) => {
  const lang = c.get("lang");
  return c.html(
    <Layout lang={lang} page="home">
      <Home lang={lang} />
    </Layout>
  );
});

app.get("/:lang/manifesto", (c) => {
  const lang = c.get("lang");
  return c.html(
    <Layout lang={lang} page="manifesto">
      <Manifesto lang={lang} />
    </Layout>
  );
});

// Support translated routes
app.get("/:lang/:route", (c) => {
  const lang = c.get("lang");
  const page = c.get("page");
  
  const pageComponents: Record<string, any> = {
    manifesto: Manifesto,
    demo: Demo,
    docs: Docs,
    about: About,
    howWeGotHere: HowWeGotHere,
  };
  
  const Component = pageComponents[page];
  
  if (!Component) {
    return c.notFound();
  }
  
  return c.html(
    <Layout lang={lang} page={page}>
      <Component lang={lang} />
    </Layout>
  );
});

// HTMX Demo Modal Endpoints

// In-memory todo store (in real app, use database)
const todos: Map<string, Array<{ id: number; title: string; completed: boolean }>> = new Map();

function getTodos(sessionId: string) {
  if (!todos.has(sessionId)) {
    todos.set(sessionId, [
      { id: 1, title: "Learn HTMX", completed: true },
      { id: 2, title: "Build with SHAB Stack", completed: false },
      { id: 3, title: "Deploy to production", completed: false },
    ]);
  }
  return todos.get(sessionId)!;
}

// 1. Form Submission with Validation
app.get("/:lang/demo/open/form", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Form Submission with HTMX</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Submit the form below. HTMX intercepts it, validates on server, and responds with HTML.</p>
        <div id="form-message"></div>
        <DemoForm lang={lang} />
      </div>
    </div>
  );
});

// 2. Todo List (HATEOAS)
app.get("/:lang/demo/open/todos", (c) => {
  const lang = c.get("lang");
  const sessionId = c.req.header("hx-request") || "demo";
  const todoList = getTodos(sessionId);
  
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Todo List (HATEOAS Pattern)</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Server-driven state. Add, complete, delete todos. Notice how available actions change based on state.</p>
        
        <form hx-post={`/${lang}/demo/todos/add`} hx-target="#todo-list" hx-swap="beforeend" style="margin-bottom: 1.5rem; display: flex; gap: 0.5rem;">
          <input type="text" name="title" placeholder="New todo..." required style="flex: 1; padding: 0.5rem; border: 1px solid #d4b896; border-radius: 4px;" />
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
        
        <div id="todo-list">
          {todoList.map(todo => (
            <div key={todo.id} id={`todo-${todo.id}`} style={`padding: 1rem; border: 1px solid #d4b896; border-radius: 4px; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem; ${todo.completed ? 'background: #f0f0f0; opacity: 0.7;' : 'background: #fff;'}`}>
              <div style="flex: 1;">
                <strong style={todo.completed ? 'text-decoration: line-through; color: #999;' : ''}>{todo.title}</strong>
              </div>
              <div style="display: flex; gap: 0.5rem;">
                {!todo.completed && (
                  <button 
                    type="button"
                    hx-post={`/${lang}/demo/todos/${todo.id}/complete?session=${sessionId}`}
                    hx-target={`#todo-${todo.id}`}
                    hx-swap="outerHTML"
                    class="btn btn-secondary"
                    style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
                  >
                    ✓ Complete
                  </button>
                )}
                {todo.completed && (
                  <button 
                    type="button"
                    hx-post={`/${lang}/demo/todos/${todo.id}/uncomplete?session=${sessionId}`}
                    hx-target={`#todo-${todo.id}`}
                    hx-swap="outerHTML"
                    class="btn btn-secondary"
                    style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
                  >
                    ↺ Undo
                  </button>
                )}
                <button 
                  type="button"
                  hx-delete={`/${lang}/demo/todos/${todo.id}?session=${sessionId}`}
                  hx-target={`#todo-${todo.id}`}
                  hx-swap="outerHTML swap:1s"
                  hx-confirm="Delete this todo?"
                  class="btn btn-danger"
                  style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f9f6f1; border-radius: 4px; font-size: 0.9rem;">
          <strong>HATEOAS in action:</strong> The server decides which buttons to show. Completed todos show "Undo" instead of "Complete". The client doesn't need business logic.
        </div>
      </div>
    </div>
  );
});

app.post("/:lang/demo/todos/add", async (c) => {
  const data = await c.req.formData();
  const title = data.get("title") as string;
  const sessionId = c.req.query("session") || "demo";
  const todoList = getTodos(sessionId);
  
  const newTodo = {
    id: Math.max(0, ...todoList.map(t => t.id)) + 1,
    title,
    completed: false
  };
  
  todoList.push(newTodo);
  
  return c.html(
    <div id={`todo-${newTodo.id}`} style="padding: 1rem; border: 1px solid #d4b896; border-radius: 4px; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem; background: #fff;">
      <div style="flex: 1;">
        <strong>{newTodo.title}</strong>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button 
          type="button"
          hx-post={`/${c.get("lang")}/demo/todos/${newTodo.id}/complete?session=${sessionId}`}
          hx-target={`#todo-${newTodo.id}`}
          hx-swap="outerHTML"
          class="btn btn-secondary"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ✓ Complete
        </button>
        <button 
          type="button"
          hx-delete={`/${c.get("lang")}/demo/todos/${newTodo.id}?session=${sessionId}`}
          hx-target={`#todo-${newTodo.id}`}
          hx-swap="outerHTML swap:1s"
          hx-confirm="Delete this todo?"
          class="btn btn-danger"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ✕
        </button>
      </div>
    </div>
  );
});

app.post("/:lang/demo/todos/:id/complete", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const sessionId = c.req.query("session") || "demo";
  const todoList = getTodos(sessionId);
  const todo = todoList.find(t => t.id === id);
  
  if (todo) {
    todo.completed = true;
  }
  
  return c.html(
    <div id={`todo-${id}`} style="padding: 1rem; border: 1px solid #d4b896; border-radius: 4px; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem; background: #f0f0f0; opacity: 0.7;">
      <div style="flex: 1;">
        <strong style="text-decoration: line-through; color: #999;">{todo?.title}</strong>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button 
          type="button"
          hx-post={`/${c.get("lang")}/demo/todos/${id}/uncomplete?session=${sessionId}`}
          hx-target={`#todo-${id}`}
          hx-swap="outerHTML"
          class="btn btn-secondary"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ↺ Undo
        </button>
        <button 
          type="button"
          hx-delete={`/${c.get("lang")}/demo/todos/${id}?session=${sessionId}`}
          hx-target={`#todo-${id}`}
          hx-swap="outerHTML swap:1s"
          hx-confirm="Delete this todo?"
          class="btn btn-danger"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ✕
        </button>
      </div>
    </div>
  );
});

app.post("/:lang/demo/todos/:id/uncomplete", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const sessionId = c.req.query("session") || "demo";
  const todoList = getTodos(sessionId);
  const todo = todoList.find(t => t.id === id);
  
  if (todo) {
    todo.completed = false;
  }
  
  return c.html(
    <div id={`todo-${id}`} style="padding: 1rem; border: 1px solid #d4b896; border-radius: 4px; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem; background: #fff;">
      <div style="flex: 1;">
        <strong>{todo?.title}</strong>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button 
          type="button"
          hx-post={`/${c.get("lang")}/demo/todos/${id}/complete?session=${sessionId}`}
          hx-target={`#todo-${id}`}
          hx-swap="outerHTML"
          class="btn btn-secondary"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ✓ Complete
        </button>
        <button 
          type="button"
          hx-delete={`/${c.get("lang")}/demo/todos/${id}?session=${sessionId}`}
          hx-target={`#todo-${id}`}
          hx-swap="outerHTML swap:1s"
          hx-confirm="Delete this todo?"
          class="btn btn-danger"
          style="font-size: 0.85rem; padding: 0.4rem 0.75rem;"
        >
          ✕
        </button>
      </div>
    </div>
  );
});

app.delete("/:lang/demo/todos/:id", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const sessionId = c.req.query("session") || "demo";
  const todoList = getTodos(sessionId);
  const index = todoList.findIndex(t => t.id === id);
  
  if (index !== -1) {
    todoList.splice(index, 1);
  }
  
  return c.html(<></>);
});

// 3. Rich Text Editor
app.get("/:lang/demo/open/edit", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Inline Edit Demo</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Click the headline to edit it. HTMX swaps to edit form.</p>
        <div id="editable-headline" hx-get={`/${lang}/demo/edit-form`} hx-trigger="click" hx-target="this" hx-swap="outerHTML" class="editable-box" style="cursor: pointer; padding: 1rem; border: 2px dashed #ccc; border-radius: 4px;">
          <h2>Click to edit me</h2>
        </div>
      </div>
    </div>
  );
});

// 3. Fragment
app.get("/:lang/demo/open/fragment", (c) => {
  const lang = c.get("lang");
  const timestamp = new Date().toLocaleString();
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Fragment Swapping</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Click button to swap only this fragment:</p>
        <div id="timestamp-box">{timestamp}</div>
        <button type="button" hx-get={`/${lang}/demo/timestamp`} hx-target="#timestamp-box" hx-swap="innerHTML" class="btn btn-primary" style="margin-top: 1rem;">Fresh Timestamp</button>
      </div>
    </div>
  );
});

app.get("/:lang/demo/timestamp", (c) => {
  return c.html(new Date().toLocaleString());
});

// 4. Delete
app.get("/:lang/demo/open/delete", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Delete with Confirmation</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Document: contract-2025.pdf (2.4 MB)</p>
        <div id="delete-target">
          <button type="button" hx-get={`/${lang}/demo/delete-confirm`} hx-target="#delete-target" hx-swap="innerHTML" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
});

app.get("/:lang/demo/delete-confirm", (c) => {
  const lang = c.get("lang");
  return c.html(
    <>
      <p><strong>Really delete? This cannot be undone.</strong></p>
      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <button type="button" hx-post={`/${lang}/demo/delete-confirm`} class="btn btn-danger">Yes, delete</button>
        <button type="button" hx-get={`/${lang}/demo/open/delete`} hx-target="#demo-modal" hx-swap="innerHTML" class="btn btn-secondary">Cancel</button>
      </div>
    </>
  );
});

app.post("/:lang/demo/delete-confirm", (c) => {
  return c.html(<p style="color: green;">✓ Deleted successfully!</p>);
});

// 5. Loading
app.get("/:lang/demo/open/loading", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Loading States</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <button type="button" hx-get={`/${lang}/demo/load-data`} hx-target="#data-area" hx-swap="innerHTML" hx-indicator="#spinner" class="btn btn-primary">Load Data</button>
        <div id="spinner" class="spinner htmx-indicator" style="margin-top: 1rem;">Loading...</div>
        <div id="data-area"></div>
      </div>
    </div>
  );
});

app.get("/:lang/demo/load-data", (c) => {
  return c.html(
    <>
      <p style="margin-top: 1rem; color: green;">Data loaded!</p>
      <ul style="margin-top: 0.5rem;">
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
    </>
  );
});

// 6. Search
app.get("/:lang/demo/open/search", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Live Search</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Search..." hx-get={`/${lang}/demo/search-items`} hx-target="#items-list" hx-swap="innerHTML" hx-trigger="keyup changed delay:300ms" hx-include="this" name="q" style="width: 100%; padding: 0.5rem; margin-bottom: 1rem;" />
        <div id="items-list">Type to search...</div>
      </div>
    </div>
  );
});

app.get("/:lang/demo/search-items", (c) => {
  const q = c.req.query("q") || "";
  const items = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry"];
  const filtered = items.filter(i => i.toLowerCase().includes(q.toLowerCase()));
  return c.html(
    <>
      {filtered.length > 0 ? (
        <ul>{filtered.map(i => <li key={i}>{i}</li>)}</ul>
      ) : (
        <p>No results for "{q}"</p>
      )}
    </>
  );
});

// 7. Sorting
app.get("/:lang/demo/open/sorting", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Table Sorting</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <table class="demo-table" style="width: 100%; margin-top: 1rem;">
          <thead>
            <tr>
              <th><button type="button" hx-get={`/${lang}/demo/sort?by=name`} hx-target="table" hx-swap="outerHTML" style="background: none; border: none; cursor: pointer;">Name ↕</button></th>
              <th><button type="button" hx-get={`/${lang}/demo/sort?by=score`} hx-target="table" hx-swap="outerHTML" style="background: none; border: none; cursor: pointer;">Score ↕</button></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Alice</td><td>95</td></tr>
            <tr><td>Bob</td><td>87</td></tr>
            <tr><td>Charlie</td><td>92</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

app.get("/:lang/demo/sort", (c) => {
  const lang = c.get("lang");
  const by = c.req.query("by") || "name";
  const rows = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 87 },
    { name: "Charlie", score: 92 }
  ];
  
  const sorted = by === "score" 
    ? [...rows].sort((a, b) => b.score - a.score)
    : [...rows].sort((a, b) => a.name.localeCompare(b.name));

  return c.html(
    <table class="demo-table" style="width: 100%;">
      <thead>
        <tr>
          <th><button type="button" hx-get={`/${lang}/demo/sort?by=name`} hx-target="table" hx-swap="outerHTML" style="background: none; border: none; cursor: pointer;">Name ↕</button></th>
          <th><button type="button" hx-get={`/${lang}/demo/sort?by=score`} hx-target="table" hx-swap="outerHTML" style="background: none; border: none; cursor: pointer;">Score ↕</button></th>
        </tr>
      </thead>
      <tbody>
        {sorted.map(r => <tr key={r.name}><td>{r.name}</td><td>{r.score}</td></tr>)}
      </tbody>
    </table>
  );
});

// 8. Real-time
app.get("/:lang/demo/open/realtime", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Real-time Updates</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <div id="realtime-value" hx-get={`/${lang}/demo/realtime-value`} hx-trigger="load, every 2s" hx-swap="innerHTML">{Math.floor(Math.random() * 100)}</div>
      </div>
    </div>
  );
});

app.get("/:lang/demo/realtime-value", (c) => {
  return c.html(Math.floor(Math.random() * 100).toString());
});

// HTMX endpoints
app.post("/:lang/demo/form", async (c) => {
  const data = await c.req.formData();
  const name = data.get("name") as string;
  const email = data.get("email") as string;

  // Simple validation
  const errors: { name?: string; email?: string } = {};
  if (!name || name.trim().length === 0) errors.name = "Name is required";
  if (!email || !email.includes("@")) errors.email = "Valid email required";

  if (Object.keys(errors).length > 0) {
    return c.html(
      <DemoForm errors={errors} values={{ name, email }} formSubmitting={false} />
    );
  }

  return c.html(
    <div hx-swap-oob="true" id="form-message">
      <p style="color: green; padding: 1rem; background: #f0f0f0; border-radius: 4px;">
        ✓ Form submitted: {name} ({email})
      </p>
    </div>
  );
});

app.get("/:lang/demo/edit-form", (c) => {
  const lang = c.get("lang");
  return c.html(
    <form id="editable-headline" hx-post={`/${lang}/demo/edit`} hx-target="this" hx-swap="outerHTML" style="padding: 1rem; border: 2px solid #4a90e2; border-radius: 4px;">
      <input type="text" name="headline" value="Click to edit me" style="width: 100%; padding: 0.5rem; font-size: 1.5rem; margin-bottom: 0.5rem;" />
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  );
});

app.post("/:lang/demo/edit", async (c) => {
  const data = await c.req.formData();
  const headline = data.get("headline") as string;

  return c.html(
    <div id="editable-headline" hx-get={`/${c.get("lang")}/demo/edit-form`} hx-trigger="click" hx-target="this" hx-swap="outerHTML" class="editable-box" style="cursor: pointer; padding: 1rem; border: 2px dashed #ccc; border-radius: 4px;">
      <h2>{headline || "Default Headline"}</h2>
    </div>
  );
});

// 404 Handler
app.notFound((c) => {
  const lang = c.get("lang") || "en";
  return c.html(
    <Layout lang={lang} page="404">
      <NotFound lang={lang} />
    </Layout>,
    404
  );
});

export default app;


// 3. Rich Text Editor
app.get("/:lang/demo/open/editor", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Rich Text Editor</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>A fully functional inline editor using contenteditable. Format text, add headings, lists. Save sends HTML to server.</p>
        <div class="editor-container">
          <div class="editor-toolbar">
            <button type="button" class="editor-btn" onclick="document.execCommand('bold')"><strong>B</strong></button>
            <button type="button" class="editor-btn" onclick="document.execCommand('italic')"><em>I</em></button>
            <button type="button" class="editor-btn" onclick="document.execCommand('underline')"><u>U</u></button>
            <div class="editor-separator"></div>
            <button type="button" class="editor-btn" onclick="document.execCommand('formatBlock', false, 'h2')">H2</button>
            <button type="button" class="editor-btn" onclick="document.execCommand('formatBlock', false, 'h3')">H3</button>
            <button type="button" class="editor-btn" onclick="document.execCommand('formatBlock', false, 'p')">P</button>
            <div class="editor-separator"></div>
            <button type="button" class="editor-btn" onclick="document.execCommand('insertUnorderedList')">• List</button>
            <button type="button" class="editor-btn" onclick="document.execCommand('insertOrderedList')">1. List</button>
            <div class="editor-separator"></div>
            <button type="button" class="editor-btn" onclick="document.execCommand('formatBlock', false, 'blockquote')">Quote</button>
          </div>
          <div 
            id="editor-content" 
            class="editor-content" 
            contenteditable={true}
            data-placeholder="Start typing..."
          >
            <h2>Welcome to SHAB Editor</h2>
            <p>This is a <strong>rich text editor</strong> built with pure <code>contenteditable</code>. No React. No Vue. No framework.</p>
            <p>Try formatting this text:</p>
            <ul>
              <li>Make text <strong>bold</strong> or <em>italic</em></li>
              <li>Create headings and lists</li>
              <li>Add blockquotes</li>
            </ul>
            <p>When you click Save, HTMX sends the HTML to the server.</p>
          </div>
        </div>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button 
            type="button" 
            class="btn btn-primary"
            hx-post={`/${lang}/demo/save-editor`}
            hx-include="#editor-content"
            hx-target="#editor-result"
          >
            Save Content
          </button>
          <button type="button" class="btn btn-secondary" onclick="document.querySelector('#editor-content').innerHTML = '<p>Content cleared!</p>'">
            Clear
          </button>
        </div>
        <div id="editor-result" style="margin-top: 1rem;"></div>
      </div>
    </div>
  );
});

app.post("/:lang/demo/save-editor", async (c) => {
  const data = await c.req.formData();
  const content = data.get("editor-content") || "";
  const wordCount = content.toString().split(/\s+/).filter(Boolean).length;
  
  return c.html(
    <div style="padding: 1rem; background: #e8f5e9; border-radius: 4px; border-left: 4px solid #4caf50;">
      <p style="margin: 0; color: #2e7d32; font-weight: 600;">✓ Content saved to server!</p>
      <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: #555;">
        Word count: {wordCount} | Characters: {content.toString().length}
      </p>
    </div>
  );
});

// 10. Infinite Scroll
app.get("/:lang/demo/open/infinite", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Infinite Scroll</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Scroll down to load more items. HTMX triggers when the sentinel element enters viewport.</p>
        <div id="infinite-list" style="max-height: 400px; overflow-y: auto; border: 1px solid #d4b896; border-radius: 4px; padding: 1rem;">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} style="padding: 1rem; border-bottom: 1px solid #e8dcc8;">
              <strong>Item {i + 1}</strong>
              <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem; color: #666;">
                This is item number {i + 1}. Scroll down to load more.
              </p>
            </div>
          ))}
          <div 
            hx-get={`/${lang}/demo/load-more?page=2`}
            hx-trigger="intersect once"
            hx-swap="afterend"
            style="padding: 1rem; text-align: center; color: #999;"
          >
            Loading more...
          </div>
        </div>
      </div>
    </div>
  );
});

app.get("/:lang/demo/load-more", (c) => {
  const page = Number.parseInt(c.req.query("page") || "2");
  const start = (page - 1) * 10 + 1;
  const lang = c.get("lang");
  
  return c.html(
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} style="padding: 1rem; border-bottom: 1px solid #e8dcc8;">
          <strong>Item {start + i}</strong>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem; color: #666;">
            Loaded from page {page}. Keep scrolling!
          </p>
        </div>
      ))}
      {page < 5 && (
        <div 
          hx-get={`/${lang}/demo/load-more?page=${page + 1}`}
          hx-trigger="intersect once"
          hx-swap="afterend"
          style="padding: 1rem; text-align: center; color: #999;"
        >
          Loading more...
        </div>
      )}
      {page >= 5 && (
        <div style="padding: 1rem; text-align: center; color: #8b7355; font-weight: 600;">
          ✓ That's all folks! No more items.
        </div>
      )}
    </>
  );
});

// 11. Drag & Drop Upload
app.get("/:lang/demo/open/drag", (c) => {
  const lang = c.get("lang");
  return c.html(
    <div class="modal-content">
      <div class="modal-header">
        <h2>Drag & Drop Upload</h2>
        <button type="button" hx-on="click: document.querySelector('#demo-modal').innerHTML = '';" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <p>Drag an image file here or click to select. Server processes and returns preview.</p>
        <div 
          id="drop-zone"
          style="border: 2px dashed #d4b896; border-radius: 8px; padding: 3rem; text-align: center; background: #faf7f2; cursor: pointer; transition: all 0.2s;"
          ondragover="event.preventDefault(); this.style.borderColor='#8b7355'; this.style.background='#f5f1ed';"
          ondragleave="this.style.borderColor='#d4b896'; this.style.background='#faf7f2';"
          ondrop="event.preventDefault(); this.style.borderColor='#d4b896'; this.style.background='#faf7f2'; handleFileDrop(event);"
          onclick="document.getElementById('file-input').click();"
        >
          <p style="font-size: 3rem; margin: 0;">📁</p>
          <p style="margin: 1rem 0 0 0; font-weight: 600; color: #8b7355;">Drop image here or click to browse</p>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: #999;">Supports: JPG, PNG, GIF</p>
        </div>
        <form id="upload-form" hx-post={`/${lang}/demo/upload`} hx-target="#upload-result" hx-encoding="multipart/form-data" style="display: none;">
          <input type="file" id="file-input" name="file" accept="image/*" onchange="this.form.dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));" />
        </form>
        <div id="upload-result" style="margin-top: 1.5rem;"></div>
        <script>{`
          function handleFileDrop(e) {
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
              const input = document.getElementById('file-input');
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(file);
              input.files = dataTransfer.files;
              document.getElementById('upload-form').dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
            }
          }
        `}</script>
      </div>
    </div>
  );
});

app.post("/:lang/demo/upload", async (c) => {
  const data = await c.req.formData();
  const file = data.get("file") as File;
  
  if (!file) {
    return c.html(<p style="color: #f56565;">No file uploaded</p>);
  }
  
  // In real app, save to disk/S3. Here we just show info.
  const sizeKB = (file.size / 1024).toFixed(2);
  
  return c.html(
    <div style="border: 1px solid #4caf50; border-radius: 8px; padding: 1.5rem; background: #e8f5e9;">
      <p style="margin: 0 0 1rem 0; color: #2e7d32; font-weight: 600;">✓ File uploaded successfully!</p>
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 0.5rem 1rem; font-size: 0.9rem;">
        <strong>Filename:</strong> <span>{file.name}</span>
        <strong>Size:</strong> <span>{sizeKB} KB</span>
        <strong>Type:</strong> <span>{file.type}</span>
      </div>
      <p style="margin: 1rem 0 0 0; font-size: 0.85rem; color: #555;">
        In a real app, this would be saved to disk or S3 and you'd get back a URL.
      </p>
    </div>
  );
});
