export default function HowWeGotHere({ lang }: { lang: string }) {
  return (
    <div class="rant-page">
      <div class="hero">
        <h2>How We Got Here</h2>
        <p class="subtitle">A brief history of how we accidentally destroyed web development</p>
      </div>

      <section class="rant-section">
        <h3>1999: The Web Works</h3>
        <p>In 1999, the web was simple. You wrote HTML. The server sent it to the browser. The browser rendered it. Forms submitted to the server. The server processed them and sent back a new page. This was called "the web" and it worked perfectly.</p>
        <p>Netscape added JavaScript so you could validate forms client-side before submission. This was a good idea. It saved a round trip. Users got instant feedback. The server still did the real validation because you can't trust the client. Everyone understood this.</p>
        <p>Then we got greedy.</p>
      </section>

      <section class="rant-section">
        <h3>2004: AJAX Arrives</h3>
        <p>Gmail launched. It used XMLHttpRequest to fetch data without reloading the page. This was revolutionary. Suddenly, web apps felt responsive. No more white flashes. No more losing your scroll position.</p>
        <p>But here's what we should have learned: <strong>AJAX is for fetching data, not for replacing the entire rendering pipeline.</strong></p>
        <p>Gmail used AJAX to check for new emails. It didn't use AJAX to render the entire application. The server still sent HTML. AJAX just made it smoother.</p>
        <p>We didn't learn this lesson.</p>
      </section>

      <section class="rant-section">
        <h3>2010: The Framework Wars Begin</h3>
        <p>Backbone.js arrived. Then Knockout. Then Angular. Then Ember. Each promised to "organize your JavaScript." And they did. But they also convinced us of something dangerous:</p>
        <p class="highlight"><strong>That the browser should be responsible for rendering the UI.</strong></p>
        <p>Suddenly, servers started sending JSON instead of HTML. The browser received data and had to figure out how to display it. We called this "separation of concerns." We said the server should only handle data, and the client should handle presentation.</p>
        <p>This was a lie we told ourselves to justify the complexity we were building.</p>
      </section>

      <section class="rant-section">
        <h3>2013: React Changes Everything</h3>
        <p>React introduced the Virtual DOM. The pitch was simple: "Don't worry about updating the DOM manually. Just describe what the UI should look like, and React will figure out the minimal changes."</p>
        <p>This was genuinely clever engineering. The problem is that it solved a problem we created by moving rendering to the client in the first place.</p>
        <p>Here's the thing: <strong>the server already knows what the UI should look like.</strong> It has all the data. It has the business logic. It can render the complete HTML and send it. The browser is already optimized for rendering HTML. It's been doing it since 1991.</p>
        <p>But React convinced us that we needed a JavaScript library to manage a virtual representation of the DOM so it could efficiently update the real DOM. We were now running a simulation of HTML inside JavaScript so we could generate HTML.</p>
        <p>Read that sentence again.</p>
      </section>

      <section class="rant-section">
        <h3>2015-2019: React's Identity Crisis</h3>
        <p>React started with class components. You extended <code>React.Component</code>, wrote lifecycle methods like <code>componentDidMount</code>, managed state with <code>this.setState</code>.</p>
        <p>Then React decided class components were bad. Too much boilerplate. Too confusing for beginners. The <code>this</code> keyword is hard.</p>
        <p>So they invented <strong>Hooks</strong>. Function components with <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, <code>useMemo</code>, <code>useCallback</code>, <code>useRef</code>, <code>useReducer</code>, <code>useLayoutEffect</code>...</p>
        <p>Hooks were supposed to be simpler. Instead, we got:</p>
        <ul>
          <li><strong>Rules of Hooks:</strong> Only call hooks at the top level. Don't call hooks in loops or conditions. Why? Because React tracks hooks by call order. Yes, really.</li>
          <li><strong>Dependency arrays:</strong> <code>useEffect</code> needs a dependency array. Forget a dependency? Stale closures. Add too many? Infinite loops. ESLint will yell at you either way.</li>
          <li><strong>useMemo and useCallback:</strong> "Optimize your components!" But when? Always? Never? Sometimes? The docs say "only when you measure a performance problem." Nobody measures.</li>
          <li><strong>useEffect cleanup:</strong> Return a function to clean up. Forget it? Memory leaks. Do it wrong? Bugs that only appear in production.</li>
        </ul>
        <p>We traded class component complexity for hook complexity. But now we called it "modern."</p>
      </section>

      <section class="rant-section">
        <h3>2020: React Server Components (Reinventing PHP)</h3>
        <p>In December 2020, React announced <strong>React Server Components</strong>. They realized that sending JavaScript to render HTML was slow.</p>
        <p>The pitch: "Some components run on the server. Some run on the client. React figures out which is which and streams the result."</p>
        <p>To make this work, you now need:</p>
        <ul>
          <li><code>'use client'</code> directive at the top of files that need interactivity</li>
          <li><code>'use server'</code> for server actions (yes, they reinvented form actions)</li>
          <li>A mental model of which code runs where</li>
          <li>Understanding of serialization boundaries</li>
          <li>Knowledge of when to use <code>async</code> components (only on server)</li>
          <li>Awareness of which APIs are available in which context</li>
        </ul>
        <p class="highlight"><strong>React Server Components are PHP with extra steps.</strong></p>
        <p>PHP in 2005: Write code on the server. It generates HTML. Send it to the browser. Done.</p>
        <p>RSC in 2023: Write code on the server. Mark it with <code>'use server'</code>. Serialize it to a special format. Stream it to the client. Deserialize it. Hydrate it. Hope it works.</p>
        <p>We spent 15 years running away from PHP, only to reinvent it with worse ergonomics and a 300KB runtime.</p>
      </section>

      <section class="rant-section">
        <h3>October 2024: React Compiler (Admitting Defeat)</h3>
        <p>On October 21, 2024, React released the Compiler Beta. A compiler that automatically optimizes your components. It adds <code>useMemo</code> and <code>useCallback</code> for you. It figures out dependencies. It prevents unnecessary re-renders.</p>
        <p>This is React admitting that their API is too hard to use correctly.</p>
        <p>Instead of simplifying the API, they built a compiler to fix your code. Instead of making React easier, they made it more magical. Instead of teaching developers how to write good code, they automated the band-aids.</p>
        <p class="highlight"><strong>React has no idea what it wants to be.</strong></p>
        <p>Class components → Function components → Hooks → Server Components → Compiler. Each "improvement" adds complexity. Each new feature requires learning a new mental model.</p>
        <p>React is willing to steal any idea—server rendering from PHP, signals from Solid, compiler optimizations from Svelte—just to stay relevant. But it can't escape its fundamental problem: <strong>it's trying to make the browser do the server's job.</strong></p>
      </section>

      <section class="rant-section">
        <h3>The Honorable Mentions: Solid, Svelte, Astro</h3>
        <p>Not all JavaScript frameworks are bad. Some actually learned from React's mistakes.</p>
        <p><strong>SolidJS</strong> uses fine-grained reactivity. No Virtual DOM. No re-rendering entire component trees. Updates are surgical. It's fast, elegant, and actually makes sense. We respect Solid.</p>
        <p><strong>Svelte</strong> compiles away. No runtime. No Virtual DOM. Just vanilla JavaScript that updates the DOM directly. It proved that frameworks don't need to ship to the browser. We respect Svelte.</p>
        <p><strong>Astro</strong> is the renegade. "Ship zero JavaScript by default. Add interactivity only where needed. Use any framework you want, or none at all." It's the closest thing to sanity in the JavaScript ecosystem. We respect Astro.</p>
        <p>These frameworks understand something React doesn't: <strong>less is more.</strong></p>
        <p>But here's the problem: <strong>JavaScript fatigue kicked in.</strong></p>
        <p>Developers are tired. Tired of learning new frameworks. Tired of rewriting apps every 2 years. Tired of build tools. Tired of configuration. Tired of the churn.</p>
        <p>Solid, Svelte, and Astro are great. But they're still JavaScript. They're still client-side (mostly). They're still part of the ecosystem that got us into this mess.</p>
        <p>At some point, you realize: <strong>maybe the problem isn't which JavaScript framework you use. Maybe the problem is using JavaScript frameworks at all.</strong></p>
      </section>

      <section class="rant-section">
        <h3>2016: The Build Pipeline Emerges</h3>
        <p>React used JSX. Browsers don't understand JSX. So we needed Babel to transpile it. But Babel is slow, so we needed Webpack to bundle it. But Webpack config is impossible, so we needed create-react-app to hide it.</p>
        <p>Now your "simple" web app requires:</p>
        <ul>
          <li>Node.js (a server runtime, running on your laptop, to build client code)</li>
          <li>npm (a package manager with 1.5 million packages, most of which are abandoned)</li>
          <li>Webpack (a module bundler that no one fully understands)</li>
          <li>Babel (a transpiler with 200+ plugins)</li>
          <li>ESLint (because JavaScript has 47 ways to write the same thing)</li>
          <li>Prettier (because developers can't agree on formatting)</li>
          <li>Jest (because testing frameworks are also frameworks now)</li>
        </ul>
        <p>Your "hello world" app now takes 2 minutes to compile and produces a 500KB JavaScript bundle.</p>
        <p>In 1999, "hello world" was 20 bytes of HTML and rendered instantly.</p>
      </section>

      <section class="rant-section">
        <h3>2018: Server-Side Rendering Returns (Sort Of)</h3>
        <p>People noticed that SPAs were slow. The browser had to download JavaScript, parse it, execute it, fetch data, and then render. This took seconds. Google started penalizing sites with poor Core Web Vitals.</p>
        <p>So we invented Server-Side Rendering. Again.</p>
        <p>But here's the twist: we didn't go back to the simple model of "server renders HTML, browser displays it." No, that would be admitting defeat.</p>
        <p>Instead, we invented <strong>hydration</strong>. The server renders HTML and sends it. The browser displays it. Then JavaScript loads, re-renders the entire page in memory, attaches event listeners, and "hydrates" the static HTML into an interactive app.</p>
        <p>We were now rendering the page twice. Once on the server (in Node.js, running React), and once on the client (in the browser, also running React). We called this "isomorphic JavaScript" and acted like it was innovation.</p>
        <p>It's not innovation. It's technical debt with a marketing budget.</p>
      </section>

      <section class="rant-section">
        <h3>2020: Meta-Frameworks Arrive</h3>
        <p>React is too low-level, so we built Next.js. Vue is too simple, so we built Nuxt. Svelte is too new, so we built SvelteKit.</p>
        <p>These meta-frameworks handle routing, data fetching, SSR, static generation, API routes, middleware, and deployment. They are frameworks for your framework.</p>
        <p>Next.js has 13 different ways to fetch data. Each has different caching behavior, different execution contexts, and different performance characteristics. The documentation is 400 pages long.</p>
        <p>In 1999, data fetching was called "SQL query" and it happened on the server.</p>
      </section>

      <section class="rant-section">
        <h3>2024: The Realization</h3>
        <p>Some developers started asking uncomfortable questions:</p>
        <ul>
          <li>Why are we sending JavaScript to render HTML when the server can send HTML?</li>
          <li>Why do we need hydration when HTML is already interactive via forms and links?</li>
          <li>Why do we need a build pipeline when browsers run JavaScript natively?</li>
          <li>Why do we need a state management library when the server has a database?</li>
          <li>Why do we need client-side routing when HTTP has URLs?</li>
        </ul>
        <p>The answers were uncomfortable:</p>
        <ul>
          <li>We don't.</li>
          <li>We don't.</li>
          <li>We don't.</li>
          <li>We don't.</li>
          <li>We don't.</li>
        </ul>
      </section>

      <section class="rant-section">
        <h3>Enter HTMX</h3>
        <p>HTMX is 14KB. It adds attributes to HTML that let you make AJAX requests and swap the response into the page. That's it.</p>
        <p>No Virtual DOM. No hydration. No build step. No state management. No client-side routing.</p>
        <p>The server sends HTML. HTMX swaps it in. The browser renders it. This is what we should have been doing since 2004.</p>
        <p>HTMX didn't invent anything new. It just remembered what we forgot: <strong>HTML is the final product, not an intermediate format.</strong></p>
      </section>

      <section class="rant-section">
        <h3>Why Hono? (And Why Not Rust?)</h3>
        <p>Let's address the elephant in the room: <strong>Rust + WASM is objectively the best solution.</strong></p>
        <p>Leptos, Yew, Dioxus—these frameworks compile to WebAssembly and run at native speed in the browser. No garbage collection. No runtime overhead. Type safety that actually means something. This is the future of web development.</p>
        <p>But you're not going to learn Rust. Not because you can't. Because your team won't. Because your deadline is next month. Because explaining lifetimes and borrow checkers to your PM is a conversation you're not ready for.</p>
        <p class="highlight"><strong>So if Rust is off the table, what's next?</strong></p>
        <p><strong>Go + templ + HTMX is objectively better than this.</strong> Go compiles to a single binary. It's fast. It has goroutines. It doesn't need a runtime. It was designed for servers.</p>
        <p>Python + FastAPI + HTMX is also better. Elixir + Phoenix LiveView is better. Hell, even modern PHP is probably better.</p>
        <p>But here's the thing: <strong>if you're a JavaScript developer</strong>, if you've been doing React for 5 years, if your team knows TypeScript and JSX and nothing else—learning Go is a big ask. Learning Rust is a pipe dream.</p>
        <p>SHAB Stack uses Hono because it lets you keep your TypeScript. Keep your JSX. Keep your tooling. You just stop sending it to the browser.</p>
        <p>Hono is tiny (12KB), fast, and lets you write <code>c.html(&lt;Component /&gt;)</code> without React. It's JSX as a templating language, which is what it should have been all along.</p>
        <p class="highlight"><strong>This is not the best solution. It's the best solution for people stuck in the JavaScript ecosystem who want out of the SPA hellscape.</strong></p>
        <p>Think of SHAB as a halfway house. You're not ready to leave JavaScript entirely, but you're done with React's bullshit. This is that middle ground.</p>
        <p>The ideal path? Learn Rust. Use Leptos. Build WASM apps. But we live in the real world. You have deadlines. You have a team that knows JavaScript. You have a codebase to maintain.</p>
        <p><strong>Throwing pearls before swine is pointless.</strong> Use what works for your situation. For now? This works.</p>
      </section>

      <section class="rant-section">
        <h3>What We Lost</h3>
        <p>In our rush to make the web "better," we lost:</p>
        <ul>
          <li><strong>Simplicity:</strong> A junior developer could build a website in 1999. Today, they need to learn React, TypeScript, Webpack, Next.js, and 47 other tools before they can render "Hello World."</li>
          <li><strong>Performance:</strong> Websites in 1999 loaded instantly. Today, they take 3-5 seconds to become interactive because they're downloading and executing megabytes of JavaScript.</li>
          <li><strong>Accessibility:</strong> HTML forms work with screen readers, keyboards, and assistive devices. Custom JavaScript widgets often don't.</li>
          <li><strong>Resilience:</strong> If JavaScript fails to load (and it does, 1-2% of the time), a server-rendered site still works. A SPA shows a blank page.</li>
          <li><strong>View Source:</strong> You used to be able to right-click, view source, and learn how a website worked. Now you see a div with id="root" and 500KB of minified JavaScript.</li>
        </ul>
      </section>

      <section class="rant-section">
        <h3>The Way Forward</h3>
        <p>SHAB Stack is not a revolution. It's a return to sanity.</p>
        <p>Server-Side Rendering: The server has the data. Let it render the HTML.</p>
        <p>HTMX: Make navigation smooth without reloading the page.</p>
        <p>Alpine.js: Add interactivity where needed, without a framework.</p>
        <p>Bun: Run JavaScript fast, without Node's baggage.</p>
        <p>This is not innovation. This is archaeology. We're digging up the patterns that worked for 20 years and wrapping them in modern tooling.</p>
        <p class="highlight"><strong>The web was solved in 1999. We just forgot.</strong></p>
      </section>

      <section class="rant-section final">
        <h3>So What Now?</h3>
        <p>You don't have to use SHAB Stack. You don't have to use HTMX. You don't have to abandon React.</p>
        <p>But the next time you're configuring Webpack, debugging hydration mismatches, or explaining to a junior developer why they need to understand the difference between <code>getStaticProps</code>, <code>getServerSideProps</code>, and <code>getInitialProps</code>, ask yourself:</p>
        <p class="highlight"><strong>Is this really better than just sending HTML?</strong></p>
        <p>Because it's not.</p>
        <p>The ideal world? You learn Rust. You build WASM apps with Leptos. You compile to native speed and never look back.</p>
        <p>The pragmatic world? You learn Go or Python. You use templ or Django. You build server applications the way they were meant to be built.</p>
        <p>The real world? You're a JavaScript developer with deadlines and a team that knows React. You can't rewrite everything in Rust. You can't convince your manager to switch to Go.</p>
        <p><strong>But you can stop sending 500KB of JavaScript to the browser.</strong></p>
        <p>You can stop debugging hydration. You can stop managing client-side state. You can stop pretending the browser is a runtime.</p>
        <p>SHAB Stack is not the destination. It's a step in the right direction. Use it. Learn from it. Then move on to something better.</p>
        <p>But for now? It's better than what you're doing.</p>
      </section>
    </div>
  );
}
