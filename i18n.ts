export const translations = {
  en: {
    routes: {
      home: "",
      manifesto: "manifesto",
      demo: "demo",
      docs: "docs",
      about: "about",
      howWeGotHere: "how-we-got-here",
    },
    nav: {
      home: "Home",
      manifesto: "Manifesto",
      demo: "Demo",
      docs: "Docs",
      about: "About",
      howWeGotHere: "How We Got Here",
    },
    footer: {
      line1: "© 2025 SHAB Stack. Server-rendered. HTML. That's it.",
      line2: "No SPA. No hydration. No JavaScript build pipeline. Just HTTP and HTML.",
    },
    home: {
      title: "Server-Side HTML. No SPA. No Illusions.",
      subtitle: "The web was solved in 1999. We've been complicating it ever since.",
      feature1: {
        title: "What is SHAB?",
        body: "<strong>S</strong>erver-Side Rendering (HTML on the server, period)<br /><strong>H</strong>TMX (ask the server for HTML, swap it in the DOM)<br /><strong>A</strong>lpine.js (tiny sprinkles of interactivity, when needed)<br /><strong>B</strong>un (runtime. Just Bun. No Node. No Deno.)",
      },
      feature2: {
        title: "No JavaScript Framework Bible",
        body: "The browser knows how to render HTML. The server knows how to generate it. HTTP knows how to move it. This is not a revelation. It's just architecture that doesn't require a PhD in React internals.",
      },
      feature3: {
        title: "Navigation Without Reloading",
        body: "Click a link. HTMX intercepts it. Server sends HTML. Browser swaps it in. No page white flash. No \"loading...\" spinner theater. Clean and mechanical.",
      },
      feature4: {
        title: "Forms That Just Work",
        body: "Submit a form. Server validates. Server responds with HTML. No client-side validation library. No form state manager. No useForm hook with 47 options. Just HTTP POST and server-side logic.",
      },
      realTalk: "<strong>Real talk:</strong> This site has no build pipeline, no hydration, no client-side state management library, and no JSON API handlers. Every route returns HTML. Navigation happens over HTTP. Forms submit to the server. The server thinks, the browser renders. It's called REST. We forgot about it.",
      demoButton: "See the Demo",
      whyExists: {
        title: "Why does this exist?",
        para1: "Because we spent 15 years convincing ourselves that the browser is a terrible platform that needs to be fixed with JavaScript.",
        para2: "We built frameworks to manage state. Then we built frameworks to manage the frameworks. Then we built build tools to compile the frameworks. Then we built meta-frameworks to abstract the build tools.",
        para3: "Meanwhile, HTTP has verbs. HTML has forms. The browser has a cache. These things work. They've always worked. We just stopped using them.",
        para4: "SHAB is what happens when you remember that the web is a document platform, not a JavaScript runtime.",
      },
      etymology: {
        title: "What's in a Name?",
        text: "SHAB is an old English slang word meaning an unpleasant, sneaky person—someone cutting corners, taking shortcuts, avoiding proper work. From Green's Dictionary of Slang (1637+), it describes someone dishonest or shabby.",
        punchline: "This framework is called SHAB because modern web development has become exactly that: an unpleasant hack that cuts corners, takes shortcuts, and avoids honest work. We're reclaiming the name.",
        source: "See <a href=\"https://greensdictofslang.com/entry/2zfo4rq\" target=\"_blank\">Green's Dictionary of Slang</a> (1637–1885)",
      },
    },
    manifesto: {
      title: "The SHAB Manifesto",
      subtitle: "Or: How We Accidentally Made Web Development Worse",
      section1: {
        title: "1. HTML is the Final Product, Not an Intermediate Format",
        para1: "The browser renders HTML. Not JSON. Not a virtual DOM reconciliation tree. Not a serialized JavaScript object. HTML is what the user's browser displays. Pretending that JavaScript-generated DOM updates are somehow superior to server-sent HTML is like refusing to eat food unless a food truck makes it on your drive. Why?",
        para2: "When you send HTML from the server, you're sending <em>the answer</em>. When you send JSON, you're sending a blueprint that requires the browser to interpret it, compile it, execute it, and only then render it. We called this \"optimization.\"",
      },
      section2: {
        title: "2. HTTP is an Application Protocol, Not a JSON Tunnel",
        para1: "HTTP has verbs: GET, POST, PUT, DELETE. It has status codes. It has caching headers. It has a well-defined, battle-tested contract between client and server.",
        para2: "Instead, we built <code>POST /api/operations</code> endpoints that do everything. We wrapped REST in JSON and called it GraphQL. We invented \"endpoints\" that aren't actually routes but dispatcher functions. We have consumed the protocol from within itself.",
        para3: "SHAB uses HTTP as intended: GET for retrieval, POST for mutation, server responds with the next valid state. Boring. Predictable. Works.",
      },
      section3: {
        title: "3. The Browser is a Document Renderer, Not a JVM",
        para1: "Netscape shipped JavaScript to make form validation happen client-side. We took that and built entire operating systems in the browser. We compile TypeScript to JavaScript to run in a V8 engine to render HTML that the browser could have rendered on load. We added package managers to manage the dependencies of the interpreters that run our JavaScript. We are conducting an elaborate prank on ourselves.",
        para2: "The browser's job is to render HTML, handle user input, and talk to the server. It does these three things extremely well. Everything else is theater.",
      },
      section4: {
        title: "4. JavaScript is a Spice, Not the Main Course",
        para1: "A menu toggle. A loading spinner. Form validation. A tooltip. These are the legitimate uses of JavaScript in 2025.",
        para2: "Rendering a list? Server's job. Managing state? Server's job. Routing? Server's job. Caching? HTTP's job (which the browser understands natively). Authentication? Server's job.",
        para3: "But somehow we decided the browser should do all of it. And we built frameworks to help. And we built build tools to compile those frameworks. And we added linters and formatters and testing libraries. And we call this \"modern web development.\"",
        para4: "Alpine.js exists because sometimes you do need JavaScript. But it's 700 bytes. SHAB uses it as garnish, not the plate.",
      },
      section5: {
        title: "5. The Build Pipeline is a Symptom, Not a Solution",
        para1: "When you need Webpack, Vite, esbuild, Rollup, and a custom Babel configuration just to run your development server, you have already lost.",
        para2: "The server runs JavaScript (Bun). The browser receives HTML. No compilation step. No tree-shaking. No code splitting strategy. No \"entry points.\"",
        para3: "Save a file. The server reloads. The page reloads. This is called \"the web.\"",
      },
      section6: {
        title: "6. Form Submission is a Feature, Not a Problem",
        para1: "Somewhere along the way, we decided that HTML forms were the enemy. Form submission reloads the page? Let's prevent that with JavaScript and handle it with XHR. Now we need to manage loading states, error states, success states. Now we need a state management library. Now we need DevTools. Now our bundle is 200KB.",
        para2: "SHAB uses HTMX to intercept form submission and swap the response into the page. No reload. No JavaScript bundle. No state management. Just HTTP. The browser already understands forms. We just changed who sees the response.",
      },
      section7: {
        title: "7. Caching is Free; We Just Forgot About It",
        para1: "HTTP has caching headers. The browser has a cache. CDNs exist. Instead, we built client-side state managers with their own cache busting strategies.",
        para2: "With HTML responses, you get browser caching, CDN caching, service worker caching—all for free. Because these are HTTP resources. Because the web was designed with caching in mind.",
      },
      summary: {
        title: "Summary",
        para1: "SHAB is not innovation. It's archaeology. We're digging up the original REST principles and HTML-over-the-wire patterns that worked for decades. We wrapped them in modern tooling (Bun, HTMX, Alpine) so they work in 2025.",
        para2: "The reason this feels radical is that we've spent 15 years building the exact opposite. But the reason it feels good is that HTTP and HTML are not mistakes. We were just convinced they were.",
      },
    },
    demo: {
      title: "Interactive Demo",
      subtitle: "HTMX + Alpine in action. HTML over the wire.",
      section1: {
        title: "1. Form Submission with HTMX",
        desc: "Submit a form. HTMX intercepts it, sends it to the server, and swaps the response. No page reload. Server validates and responds with HTML.",
        whatHappened: "What happened",
        explanation: "HTMX posted the form data to the server. The server validated it. The server sent back HTML. HTMX swapped it in. No JSON. No client-side form handling. No state manager.",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        submit: "Submit",
        submitting: "Submitting...",
      },
      section2: {
        title: "2. Inline Edit with Alpine.js",
        desc: "Click to edit. Alpine toggles between view and edit mode. On save, HTMX sends it to the server and swaps the response.",
        save: "Save",
        cancel: "Cancel",
        whatHappened: "What happened",
        explanation: "Alpine toggles the UI. When you click Save, JavaScript constructs a form and sends it via fetch. The server responds with HTML. We swap it in. The headline updates.",
      },
      section3: {
        title: "3. Fragment Swapping",
        desc: "HTMX can request and swap specific fragments of the page. Click a button, HTMX gets new content, updates just that section.",
        button: "Refresh Fragment",
        fragmentText: "This is a fragment. Click the button above to get a fresh timestamp from the server.",
        generatedAt: "Generated at",
        whatHappened: "What happened",
        explanation: "HTMX targeted this specific div and swapped its inner HTML. You can request any server route and swap any part of the page.",
      },
      section4: {
        title: "4. Delete Confirmation",
        desc: "Confirmation dialogs handled entirely with HTMX. Delete an item, confirm the action, and watch the server handle the state.",
        button: "Delete Item",
        confirmText: "Are you sure?",
        yesButton: "Yes, delete",
        noButton: "Cancel",
        successMessage: "Item deleted successfully.",
      },
      section5: {
        title: "5. Loading States",
        desc: "HTMX can trigger loading spinners and state indicators. Show users something is happening, all server-driven.",
        button: "Fetch Data",
        loadingText: "Loading...",
        dataText: "Here's the data that was fetched.",
      },
      section6: {
        title: "6. Search & Filter",
        desc: "Live search filtering without any client-side JavaScript state management. Every keystroke queries the server.",
        searchPlaceholder: "Search items...",
        searchText: "Type to filter:",
      },
      section7: {
        title: "7. Table Sorting",
        desc: "Click column headers to sort. HTMX sends the sort parameter, server sends back sorted HTML.",
        nameColumn: "Name",
        emailColumn: "Email",
        scoreColumn: "Score",
      },
      section8: {
        title: "8. Real-time Updates",
        desc: "HTMX polling: request fresh data every 2 seconds. Server sends back updated HTML. No WebSocket needed.",
        updateButton: "Poll for Updates",
        stopButton: "Stop Polling",
      },
      whatThisDemons: {
        title: "What this demonstrates:",
        items: [
          {
            label: "Forms work.",
            desc: "Server handles validation and responds with HTML or error feedback.",
          },
          {
            label: "No page reloads.",
            desc: "HTMX intercepts normal HTTP requests and swaps the response into the DOM.",
          },
          {
            label: "Alpine for local state.",
            desc: "Edit mode, spinners, conditionals—all handled by Alpine without touching the server.",
          },
          {
            label: "Responsive interactions.",
            desc: "It feels like a SPA, but the server did all the rendering.",
          },
          {
            label: "Zero client-side state management.",
            desc: "Alpine has no store. HTMX has no cache. The server is the single source of truth.",
          },
        ],
      },
    },
    about: {
      title: "About SHAB Stack",
      intro: "Understand the SHAB Stack: Server-Side Rendering, HTMX, Alpine.js, and Bun working together to build modern web applications the simple way.",
      whatEachLetterMeans: "What each letter means:",
      s: {
        title: "S – Server-Side Rendering (SSR)",
        para1: "HTML is generated on the server. When a request comes in, the server has everything it needs: database access, templates, logic. It renders the final HTML and sends it to the browser. The browser receives a ready-to-display document.",
        label1: "No hydration.",
        para2: "No executing JavaScript on the client to reproduce server-side state. You send HTML. The browser displays it. Done.",
      },
      h: {
        title: "H – HTMX",
        para1: "HTMX is a tiny library (14KB) that adds HTML attributes for AJAX-like behavior. <code>hx-get</code>, <code>hx-post</code>, etc.",
        para2: "When you click a link with <code>hx-boost=\"true\"</code>, instead of a full page load, HTMX makes a request and swaps the response into the DOM. Instant navigation. No white flash. No state loss. The server still sends HTML.",
        label1: "It's still REST.",
        para3: "We're just intercepting the browser's natural HTTP behavior and making it smoother.",
      },
      a: {
        title: "A – Alpine.js",
        para1: "Alpine.js is a 16KB reactive JavaScript library. It's like Vue or React, but meant for tiny, isolated pieces of interactivity.",
        para2: "Use it for: menu toggles, loading spinners, form validation feedback, conditionals in the DOM.",
        label1: "Not for rendering.",
        para3: "Not for state management. Not for routing. Just local, ephemeral UI behavior. Alpine ships as a CDN script; no bundling required.",
      },
      b: {
        title: "B – Bun",
        para1: "Bun is a modern JavaScript runtime, like Node.js or Deno, but faster and built from scratch in Zig.",
        para2: "Here, we use it to run the server. No dependencies on Node internals. No npm/pnpm/yarn. Just <code>bun install</code> and <code>bun run</code>. Fast startup, fast execution.",
        label1: "The only runtime.",
        para3: "We're not transpiling for Node. We're running Bun directly.",
      },
      comparison: {
        title: "How it compares to Next.js (or any modern SPA framework):",
        aspect: "Aspect",
        shab: "SHAB",
        nextjs: "Next.js / SPA",
        row1: {
          label: "Build pipeline",
          shab: "None. `bun run server.ts`",
          nextjs: "webpack/esbuild/turbopack, complex config",
        },
        row2: {
          label: "JavaScript sent to browser",
          shab: "~30KB (HTMX + Alpine CDN)",
          nextjs: "100KB–500KB+ after tree-shaking",
        },
        row3: {
          label: "Time to interactive (TTI)",
          shab: "~100ms (no JS parsing, HTML already renderable)",
          nextjs: "2–5 seconds (JS parse, execution, hydration)",
        },
        row4: {
          label: "Form submission",
          shab: "HTMX POST → HTML response → DOM swap",
          nextjs: "preventDefault(), handle in JS, setState, re-render",
        },
        row5: {
          label: "Routing",
          shab: "Server-side. HTMX intercepts links.",
          nextjs: "Client-side router in JavaScript",
        },
        row6: {
          label: "API layer",
          shab: "Server renders HTML directly",
          nextjs: "JSON API + client-side template rendering",
        },
        row7: {
          label: "Development complexity",
          shab: "Moderate (server-side templating)",
          nextjs: "High (state management, hydration, build config)",
        },
        row8: {
          label: "When to use",
          shab: "Content sites, dashboards, traditional web apps",
          nextjs: "Complex UIs, animations, offline-first apps, games",
        },
      },
      philosophy: {
        title: "Key differences in philosophy:",
        items: [
          {
            label: "Server is the source of truth.",
            desc: "Not Redux, not Zustand, not React Context. The server has the data. The server renders the UI.",
          },
          {
            label: "HTTP is the protocol.",
            desc: "We don't pretend it doesn't exist or try to hide it. We use it.",
          },
          {
            label: "HTML is code.",
            desc: "Not a template that JavaScript manipulates. HTML as the deliverable output.",
          },
          {
            label: "JavaScript is optional.",
            desc: "If the page works without it, JavaScript is a UX enhancement, not the foundation.",
          },
          {
            label: "Simpler deployment.",
            desc: "No separate frontend build. No separate API. One server, one process.",
          },
        ],
      },
      whenNotToUse: {
        title: "When NOT to use SHAB:",
        items: [
          {
            label: "Real-time multiplayer experiences.",
            desc: "If you need WebSockets and instant server-to-client updates, SHAB isn't the right fit. (Though you could layer it on.)",
          },
          {
            label: "Highly interactive UIs.",
            desc: "Complex animations, drag and drop, collaborative editing—these might benefit from a SPA framework.",
          },
          {
            label: "Offline-first applications.",
            desc: "SHAB assumes an always-connected client.",
          },
          {
            label: "Desktop/native integrations.",
            desc: "SHAB is for web browsers.",
          },
        ],
      },
      demonstrates: {
        title: "What this site demonstrates:",
        items: [
          {
            label: "Zero JavaScript build pipeline.",
            desc: "No Webpack, no Vite. Server-side JSX compilation only.",
          },
          {
            label: "Navigation without page reload.",
            desc: "HTMX `hx-boost` on links.",
          },
          {
            label: "Form submission over HTTP.",
            desc: "Server validates and responds with HTML.",
          },
          {
            label: "Alpine.js for local state.",
            desc: "Like the inline edit demo.",
          },
          {
            label: "One unified server.",
            desc: "No \"frontend\" and \"backend\" divided. Just a server that renders HTML.",
          },
        ],
      },
    },
  },
  de: {
    routes: {
      home: "",
      manifesto: "manifest",
      demo: "demo",
      docs: "dokumentation",
      about: "uber",
      howWeGotHere: "wie-wir-hierher-kamen",
    },
    nav: {
      home: "Startseite",
      manifesto: "Manifest",
      demo: "Demo",
      docs: "Dokumentation",
      about: "Über",
      howWeGotHere: "Wie wir hierher kamen",
    },
    footer: {
      line1: "© 2025 SHAB Stack. Serverseitig gerendert. HTML. Das ist alles.",
      line2: "Kein SPA. Keine Hydration. Keine JavaScript-Build-Pipeline. Nur HTTP und HTML.",
    },
    home: {
      title: "Serverseitiges HTML. Kein SPA. Keine Illusionen.",
      subtitle: "Das Web funktionierte 1999 perfekt. Seitdem machen wir es kompliziert.",
      feature1: {
        title: "Was ist SHAB?",
        body: "<strong>S</strong>erver-Side Rendering (HTML auf dem Server, Punkt)<br /><strong>H</strong>TMX (fragen Sie den Server nach HTML, tauschen Sie es im DOM)<br /><strong>A</strong>lpine.js (kleine Spritzer Interaktivität, wenn nötig)<br /><strong>B</strong>un (Laufzeit. Nur Bun. Kein Node. Kein Deno.)",
      },
      feature2: {
        title: "Keine JavaScript-Framework-Bibel",
        body: "Der Browser weiß, wie man HTML rendert. Der Server weiß, wie man es generiert. HTTP weiß, wie man es überträgt. Das ist keine Offenbarung. Es ist nur eine Architektur, die kein PhD in React-Internals erfordert.",
      },
      feature3: {
        title: "Navigation ohne Neuladen",
        body: "Klicken Sie auf einen Link. HTMX fängt ihn ab. Der Server sendet HTML. Der Browser tauscht ihn aus. Kein weißer Blitz. Kein \"Lade...\"-Spinner-Theater. Sauber und mechanisch.",
      },
      feature4: {
        title: "Formulare, die einfach funktionieren",
        body: "Senden Sie ein Formular ab. Der Server validiert. Der Server antwortet mit HTML. Keine clientseitige Validierungsbibliothek. Kein Formular-State-Manager. Kein useForm-Hook mit 47 Optionen. Nur HTTP POST und serverseitige Logik.",
      },
      realTalk: "<strong>Ehrlich gesagt:</strong> Diese Site hat keine Build-Pipeline, keine Hydration, keine Client-seitige State-Management-Bibliothek und keine JSON-API-Handler. Jede Route gibt HTML zurück. Navigation erfolgt über HTTP. Formulare werden zum Server übermittelt. Der Server denkt, der Browser rendert. Es heißt REST. Wir haben es vergessen.",
      demoButton: "Siehe die Demo",
      etymology: {
        title: "Was bedeutet der Name?",
        text: "SHAB ist ein altes englisches Slangwort, das einen unangenehmen, heimtückischen Menschen bedeutet – jemanden, der Ecken schneidet, Abkürzungen nimmt, ehrliche Arbeit vermeidet. Aus Green's Dictionary of Slang (1637+), es beschreibt jemanden Unehrlichen oder Schabbigen.",
        punchline: "Dieses Framework heißt SHAB, weil moderne Webentwicklung genau das geworden ist: ein unangenehmer Hack, der Ecken schneidet, Abkürzungen nimmt und ehrliche Arbeit vermeidet. Wir beanspruchen den Namen zurück.",
        source: "See <a href=\"https://greensdictofslang.com/entry/2zfo4rq\" target=\"_blank\">Green's Dictionary of Slang</a> (1637–1885)",
      },
    },
    manifesto: {
      title: "Das SHAB-Manifest",
      subtitle: "Oder: Wie wir Webentwicklung versehentlich verschlechtert haben",
      section1: {
        title: "1. HTML ist das Endprodukt, nicht ein Zwischenformat",
        para1: "Der Browser rendert HTML. Nicht JSON. Nicht ein virtueller DOM-Reconciliation-Baum. Nicht ein serialisiertes JavaScript-Objekt. HTML ist das, was der Browser des Benutzers anzeigt. So zu tun, als würden von JavaScript generierte DOM-Updates irgendwie überlegen zu vom Server gesendetes HTML sein, ist wie zu weigern, Essen zu essen, es sei denn, ein Foodtruck macht es auf Ihrem Fahrweg. Warum?",
        para2: "Wenn Sie HTML vom Server senden, senden Sie <em>die Antwort</em>. Wenn Sie JSON senden, senden Sie einen Plan, den der Browser interpretieren, kompilieren, ausführen und nur dann rendern muss. Wir nannten das \"Optimierung.\"",
      },
      section2: {
        title: "2. HTTP ist ein Anwendungsprotokoll, kein JSON-Tunnel",
        para1: "HTTP hat Verben: GET, POST, PUT, DELETE. Es hat Statuscodes. Es hat Caching-Header. Es hat einen gut definierten, bewährten Vertrag zwischen Client und Server.",
        para2: "Stattdessen bauten wir <code>POST /api/operations</code> Endpunkte, die alles tun. Wir wickelten REST in JSON ein und nannten es GraphQL. Wir erfanden \"Endpunkte\", die nicht wirklich Routen, sondern Dispatcher-Funktionen sind. Wir haben das Protokoll von innen heraus verbraucht.",
        para3: "SHAB nutzt HTTP wie beabsichtigt: GET zum Abrufen, POST zur Mutation, Server antwortet mit dem nächsten gültigen Zustand. Langweilig. Vorhersehbar. Funktioniert.",
      },
      section3: {
        title: "3. Der Browser ist ein Dokumenten-Renderer, keine JVM",
        para1: "Netscape versendete JavaScript, um die Formularvalidierung clientseitig durchzuführen. Wir nahmen das und bauten ganze Betriebssysteme im Browser. Wir kompilieren TypeScript zu JavaScript, um es in einer V8-Engine auszuführen, um HTML zu rendern, das der Browser beim Laden hätte rendern können. Wir haben Package Manager hinzugefügt, um die Abhängigkeiten der Interpreter zu verwalten, die unser JavaScript ausführen. Wir führen einen aufwändigen Streich an uns selbst auf.",
        para2: "Die Aufgabe des Browsers ist, HTML zu rendern, Benutzereingaben zu verarbeiten und mit dem Server zu kommunizieren. Es tut diese drei Dinge extrem gut. Alles andere ist Theater.",
      },
      section4: {
        title: "4. JavaScript ist ein Gewürz, nicht die Hauptzutat",
        para1: "Ein Menü-Toggle. Ein Lade-Spinner. Formularvalidierung. Ein Tooltip. Dies sind die legitimen Verwendungen von JavaScript im Jahr 2025.",
        para2: "Eine Liste rendern? Das ist die Aufgabe des Servers. Den Zustand verwalten? Das ist die Aufgabe des Servers. Routing? Das ist die Aufgabe des Servers. Caching? Das ist die Aufgabe des HTTP (die der Browser nativ versteht). Authentifizierung? Das ist die Aufgabe des Servers.",
        para3: "Aber irgendwie haben wir beschlossen, dass der Browser all das tun sollte. Und wir bauten Frameworks, um zu helfen. Und wir bauten Build-Tools, um diese Frameworks zu kompilieren. Und wir fügten Linter und Formatter und Test-Bibliotheken hinzu. Und wir nennen das \"moderne Webentwicklung.\"",
        para4: "Alpine.js existiert, weil man manchmal JavaScript braucht. Aber es sind 700 Bytes. SHAB nutzt es als Garnitur, nicht den Teller.",
      },
      section5: {
        title: "5. Die Build-Pipeline ist ein Symptom, keine Lösung",
        para1: "Wenn Sie Webpack, Vite, esbuild, Rollup und eine benutzerdefinierte Babel-Konfiguration benötigen, um nur den Entwicklungsserver auszuführen, haben Sie bereits verloren.",
        para2: "Der Server läuft JavaScript (Bun). Der Browser erhält HTML. Kein Kompilierungsschritt. Kein Tree-Shaking. Keine Code-Splitting-Strategie. Keine \"Einstiegspunkte.\"",
        para3: "Speichern Sie eine Datei. Der Server wird neu geladen. Die Seite wird neu geladen. Das nennt man \"das Web.\"",
      },
      section6: {
        title: "6. Formularübermittlung ist eine Funktion, keine Problem",
        para1: "Irgendwann beschlossen wir, dass HTML-Formulare der Feind sind. Formularübermittlung lädt die Seite neu? Lassen Sie uns das mit JavaScript verhindern und mit XHR handhaben. Jetzt müssen wir Ladezustände, Fehlerzustände und Erfolgszustände verwalten. Jetzt benötigen wir eine State-Management-Bibliothek. Jetzt brauchen wir DevTools. Jetzt ist unser Bundle 200KB.",
        para2: "SHAB nutzt HTMX, um Formularübermittlungen abzufangen und die Antwort in die Seite zu tauschen. Kein Neuladen. Kein JavaScript-Bundle. Kein State Management. Nur HTTP. Der Browser versteht bereits Formulare. Wir haben nur geändert, wer die Antwort sieht.",
      },
      section7: {
        title: "7. Caching ist kostenlos; wir haben es einfach vergessen",
        para1: "HTTP hat Caching-Header. Der Browser hat einen Cache. CDNs existieren. Stattdessen bauten wir Client-seitige State Manager mit ihren eigenen Cache-Busting-Strategien.",
        para2: "Mit HTML-Antworten erhalten Sie Browser-Caching, CDN-Caching, Service-Worker-Caching – alles kostenlos. Weil dies HTTP-Ressourcen sind. Weil das Web mit Caching im Sinn entworfen wurde.",
      },
      summary: {
        title: "Zusammenfassung",
        para1: "SHAB ist keine Innovation. Es ist Archäologie. Wir graben die ursprünglichen REST-Prinzipien und HTML-over-the-Wire-Muster aus, die Jahrzehnte lang funktionierten. Wir wickelten sie in modernes Tooling (Bun, HTMX, Alpine) ein, damit sie 2025 funktionieren.",
        para2: "Der Grund, warum sich dies radikal anfühlt, ist, dass wir 15 Jahre damit verbracht haben, genau das Gegenteil zu bauen. Aber der Grund, warum es sich gut anfühlt, ist, dass HTTP und HTML keine Fehler sind. Wir waren nur davon überzeugt, dass sie es sind.",
      },
    },
    demo: {
      title: "Interaktive Demo",
      subtitle: "HTMX + Alpine in Aktion. HTML über die Leitung.",
      section1: {
        title: "1. Formularübermittlung mit HTMX",
        desc: "Reichen Sie ein Formular ein. HTMX fängt es ab, sendet es an den Server und tauscht die Antwort aus. Kein Seite Neuladen. Server validiert und antwortet mit HTML.",
        whatHappened: "Was ist geschehen",
        explanation: "HTMX postete die Formulardaten an den Server. Der Server validierte sie. Der Server sendete HTML zurück. HTMX tauschte es aus. Kein JSON. Keine Client-seitige Formularverarbeitung. Kein State Manager.",
      },
      form: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "ihre@email.com",
        submit: "Einreichen",
        submitting: "Wird eingereicht...",
      },
      section2: {
        title: "2. Inline-Bearbeitung mit Alpine.js",
        desc: "Klicken Sie zum Bearbeiten. Alpine wechselt zwischen Ansichts- und Bearbeitungsmodus. Beim Speichern sendet HTMX es an den Server und tauscht die Antwort aus.",
        save: "Speichern",
        cancel: "Abbrechen",
        whatHappened: "Was ist geschehen",
        explanation: "Alpine wechselt die Benutzeroberfläche. Wenn Sie auf Speichern klicken, erstellt JavaScript ein Formular und sendet es über Fetch. Der Server antwortet mit HTML. Wir tauschen es aus. Die Überschrift wird aktualisiert.",
      },
      section3: {
        title: "3. Fragment-Austausch",
        desc: "HTMX kann spezifische Seitenfragmente anfordern und tauschen. Klicken Sie auf eine Schaltfläche, HTMX ruft neuen Inhalt ab und aktualisiert diesen Abschnitt.",
        button: "Fragment aktualisieren",
        fragmentText: "Dies ist ein Fragment. Klicken Sie auf die obige Schaltfläche, um einen frischen Zeitstempel vom Server zu erhalten.",
        generatedAt: "Generiert am",
        whatHappened: "Was ist geschehen",
        explanation: "HTMX zielte auf dieses spezifische div ab und tauschte sein inneres HTML aus. Sie können jeden Server-Route anfordern und einen beliebigen Teil der Seite tauschen.",
      },
      section4: {
        title: "4. Bestätigungsdialog löschen",
        desc: "Bestätigungsdialoge werden vollständig mit HTMX verarbeitet. Löschen Sie ein Element, bestätigen Sie die Aktion und beobachten Sie, wie der Server den Zustand verarbeitet.",
        button: "Element löschen",
        confirmText: "Sind Sie sicher?",
        yesButton: "Ja, löschen",
        noButton: "Abbrechen",
        successMessage: "Element erfolgreich gelöscht.",
      },
      section5: {
        title: "5. Ladezustände",
        desc: "HTMX kann Lade-Spinner und Statusindikatoren auslösen. Zeigen Sie den Benutzern, dass etwas passiert, alles vom Server aus gesteuert.",
        button: "Daten abrufen",
        loadingText: "Wird geladen...",
        dataText: "Hier sind die abgerufenen Daten.",
      },
      section6: {
        title: "6. Suche & Filter",
        desc: "Live-Suchfilterung ohne Client-seitige JavaScript-Zustandsverwaltung. Jeder Tastendruck fragt den Server ab.",
        searchPlaceholder: "Elemente durchsuchen...",
        searchText: "Zum Filtern eingeben:",
      },
      section7: {
        title: "7. Tabellensortierung",
        desc: "Klicken Sie auf Spaltenkopfzeilen zum Sortieren. HTMX sendet den Sortierparameter, der Server sendet sortiertes HTML zurück.",
        nameColumn: "Name",
        emailColumn: "E-Mail",
        scoreColumn: "Punktzahl",
      },
      section8: {
        title: "8. Echtzeit-Aktualisierungen",
        desc: "HTMX-Abruf: Fordern Sie alle 2 Sekunden frische Daten an. Der Server sendet aktualisiertes HTML zurück. Keine WebSockets erforderlich.",
        updateButton: "Auf Aktualisierungen prüfen",
        stopButton: "Abruf beenden",
      },
      whatThisDemons: {
        title: "Was dies demonstriert:",
        items: [
          {
            label: "Formulare funktionieren.",
            desc: "Der Server verarbeitet die Validierung und antwortet mit HTML oder Fehlerrückmeldung.",
          },
          {
            label: "Kein Seite Neuladen.",
            desc: "HTMX fängt normale HTTP-Anfragen ab und tauscht die Antwort im DOM aus.",
          },
          {
            label: "Alpine für lokalen Zustand.",
            desc: "Bearbeitungsmodus, Spinner, Bedingungen – alles wird von Alpine verarbeitet, ohne den Server zu berühren.",
          },
          {
            label: "Responsive Interaktionen.",
            desc: "Es fühlt sich wie eine SPA an, aber der Server hat alles gerendert.",
          },
          {
            label: "Null Client-seitige State Management.",
            desc: "Alpine hat keinen Store. HTMX hat keinen Cache. Der Server ist die einzige Wahrheitsquelle.",
          },
        ],
      },
    },
    about: {
      title: "Über SHAB Stack",
      intro: "Verstehen Sie den SHAB-Stack: Server-Side Rendering, HTMX, Alpine.js und Bun arbeiten zusammen, um moderne Webanwendungen auf einfache Weise zu erstellen.",
      whatEachLetterMeans: "Was jeder Buchstabe bedeutet:",
      s: {
        title: "S – Server-Side Rendering (SSR)",
        para1: "HTML wird auf dem Server generiert. Wenn eine Anfrage ankommt, hat der Server alles, was er braucht: Datenbankzugriff, Vorlagen, Logik. Es rendert das endgültige HTML und sendet es an den Browser. Der Browser erhält ein einbaufertig Dokument.",
        label1: "Keine Hydration.",
        para2: "Kein Ausführen von JavaScript auf dem Client, um den serverseitigen Zustand zu reproduzieren. Sie senden HTML. Der Browser zeigt es an. Fertig.",
      },
      h: {
        title: "H – HTMX",
        para1: "HTMX ist eine kleine Bibliothek (14KB), die HTML-Attribute für AJAX-ähnliches Verhalten hinzufügt. <code>hx-get</code>, <code>hx-post</code>, usw.",
        para2: "Wenn Sie auf einen Link mit <code>hx-boost=\"true\"</code> klicken, macht HTMX statt eines vollständigen Seite-Ladens eine Anfrage und tauscht die Antwort in den DOM aus. Sofortige Navigation. Kein weißer Blitz. Kein Zustandsverlust. Der Server sendet immer noch HTML.",
        label1: "Es ist immer noch REST.",
        para3: "Wir fangen gerade das natürliche HTTP-Verhalten des Browsers ab und machen es sanfter.",
      },
      a: {
        title: "A – Alpine.js",
        para1: "Alpine.js ist eine 16KB reaktive JavaScript-Bibliothek. Es ist wie Vue oder React, aber für kleine, isolierte Interaktivitätsfragmente bestimmt.",
        para2: "Verwenden Sie es für: Menü-Toggles, Lade-Spinner, Formularvalidierungs-Feedback, Bedingungen im DOM.",
        label1: "Nicht zum Rendern.",
        para3: "Nicht für State Management. Nicht zum Routing. Nur lokales, kurzlebiges UI-Verhalten. Alpine wird als CDN-Skript versandt; keine Bündelung erforderlich.",
      },
      b: {
        title: "B – Bun",
        para1: "Bun ist eine moderne JavaScript-Laufzeit wie Node.js oder Deno, aber schneller und von Grund auf in Zig gebaut.",
        para2: "Hier verwenden wir es, um den Server auszuführen. Keine Abhängigkeiten von Node-Internals. Kein npm/pnpm/yarn. Nur <code>bun install</code> und <code>bun run</code>. Schneller Start, schnelle Ausführung.",
        label1: "Die einzige Laufzeit.",
        para3: "Wir transpilieren nicht für Node. Wir führen Bun direkt aus.",
      },
      comparison: {
        title: "Wie es sich mit Next.js (oder einem modernen SPA-Framework) vergleicht:",
        aspect: "Aspekt",
        shab: "SHAB",
        nextjs: "Next.js / SPA",
        row1: {
          label: "Build-Pipeline",
          shab: "Keine. `bun run server.ts`",
          nextjs: "webpack/esbuild/turbopack, komplexe Konfiguration",
        },
        row2: {
          label: "JavaScript, das an den Browser gesendet wird",
          shab: "~30KB (HTMX + Alpine CDN)",
          nextjs: "100KB–500KB+ nach Tree-Shaking",
        },
        row3: {
          label: "Zeit bis interaktiv (TTI)",
          shab: "~100ms (keine JS-Verarbeitung, HTML bereits renderbar)",
          nextjs: "2–5 Sekunden (JS-Verarbeitung, Ausführung, Hydration)",
        },
        row4: {
          label: "Formularübermittlung",
          shab: "HTMX POST → HTML-Antwort → DOM-Austausch",
          nextjs: "preventDefault(), im JS verarbeiten, setState, neu rendern",
        },
        row5: {
          label: "Routing",
          shab: "Serverseitig. HTMX fängt Links ab.",
          nextjs: "Client-seitiger Router in JavaScript",
        },
        row6: {
          label: "API-Schicht",
          shab: "Server rendert HTML direkt",
          nextjs: "JSON-API + Client-seitige Template-Rendering",
        },
        row7: {
          label: "Entwicklungskomplexität",
          shab: "Moderat (serverseitige Templating)",
          nextjs: "Hoch (State Management, Hydration, Build-Konfiguration)",
        },
        row8: {
          label: "Wann zu verwenden",
          shab: "Content-Sites, Dashboards, traditionelle Web-Apps",
          nextjs: "Komplexe UIs, Animationen, Offline-first-Apps, Spiele",
        },
      },
      philosophy: {
        title: "Schlüsseldifferenzen in der Philosophie:",
        items: [
          {
            label: "Der Server ist die Wahrheitsquelle.",
            desc: "Nicht Redux, nicht Zustand, nicht React Context. Der Server hat die Daten. Der Server rendert die UI.",
          },
          {
            label: "HTTP ist das Protokoll.",
            desc: "Wir tun nicht so, als würde es nicht existieren, oder versuchen es zu verstecken. Wir nutzen es.",
          },
          {
            label: "HTML ist Code.",
            desc: "Nicht eine Vorlage, die JavaScript manipuliert. HTML als lieferbares Ergebnis.",
          },
          {
            label: "JavaScript ist optional.",
            desc: "Wenn die Seite ohne sie funktioniert, ist JavaScript eine UX-Verbesserung, keine Grundlage.",
          },
          {
            label: "Einfachere Bereitstellung.",
            desc: "Kein separater Frontend-Build. Keine separate API. Ein Server, ein Prozess.",
          },
        ],
      },
      whenNotToUse: {
        title: "Wann SHAB NICHT verwenden:",
        items: [
          {
            label: "Echtzeit-Mehrspielererlebnisse.",
            desc: "Wenn Sie WebSockets und sofortige Server-zu-Client-Aktualisierungen benötigen, ist SHAB nicht geeignet. (Obwohl Sie es überlagern könnten.)",
          },
          {
            label: "Hochinteraktive UIs.",
            desc: "Komplexe Animationen, Drag und Drop, kollaboratives Bearbeiten – dies könnte von einem SPA-Framework profitieren.",
          },
          {
            label: "Offline-first-Anwendungen.",
            desc: "SHAB geht davon aus, dass der Client immer verbunden ist.",
          },
          {
            label: "Desktop-/Native-Integrationen.",
            desc: "SHAB ist für Web-Browser.",
          },
        ],
      },
      demonstrates: {
        title: "Was diese Website demonstriert:",
        items: [
          {
            label: "Null JavaScript-Build-Pipeline.",
            desc: "Kein Webpack, kein Vite. Nur serverseitige JSX-Kompilierung.",
          },
          {
            label: "Navigation ohne Seite Neuladen.",
            desc: "HTMX `hx-boost` auf Links.",
          },
          {
            label: "Formularübermittlung über HTTP.",
            desc: "Server validiert und antwortet mit HTML.",
          },
          {
            label: "Alpine.js für lokalen Zustand.",
            desc: "Wie die Inline-Edit-Demo.",
          },
          {
            label: "Ein einheitlicher Server.",
            desc: "Kein \"Frontend\" und \"Backend\" getrennt. Nur ein Server, der HTML rendert.",
          },
        ],
      },
    },
  },
  fr: {
    routes: {
      home: "",
      manifesto: "manifeste",
      demo: "demo",
      docs: "documentation",
      about: "a-propos",
      howWeGotHere: "comment-nous-en-sommes-arrives-la",
    },
    nav: {
      home: "Accueil",
      manifesto: "Manifeste",
      demo: "Démo",
      docs: "Documentation",
      about: "À propos",
      howWeGotHere: "Comment nous en sommes arrivés là",
    },
    footer: {
      line1: "© 2025 SHAB Stack. Rendu côté serveur. HTML. C'est tout.",
      line2: "Pas de SPA. Pas d'hydratation. Pas de pipeline de construction JavaScript. Juste HTTP et HTML.",
    },
    home: {
      title: "HTML côté serveur. Pas de SPA. Pas d'illusions.",
      subtitle: "Le web fonctionnait parfaitement en 1999. Depuis, on passe notre temps à le compliquer.",
      feature1: {
        title: "Qu'est-ce que SHAB?",
        body: "<strong>S</strong>erver-Side Rendering (HTML sur le serveur, point)<br /><strong>H</strong>TMX (demander au serveur du HTML, l'échanger dans le DOM)<br /><strong>A</strong>lpine.js (petites touches d'interactivité, si nécessaire)<br /><strong>B</strong>un (exécution. Juste Bun. Pas Node. Pas Deno.)",
      },
      feature2: {
        title: "Pas de Bible du Framework JavaScript",
        body: "Le navigateur sait comment rendre HTML. Le serveur sait comment le générer. HTTP sait comment le déplacer. Ce n'est pas une révélation. C'est juste une architecture qui ne nécessite pas de doctorat en mécanismes React.",
      },
      feature3: {
        title: "Navigation sans rechargement",
        body: "Cliquez sur un lien. HTMX l'intercepte. Le serveur envoie du HTML. Le navigateur l'échange. Pas de flash blanc. Pas de théâtre avec spinner \"chargement...\". Propre et mécanique.",
      },
      feature4: {
        title: "Formulaires qui fonctionnent simplement",
        body: "Soumettez un formulaire. Le serveur valide. Le serveur répond avec HTML. Pas de bibliothèque de validation côté client. Pas de gestionnaire d'état de formulaire. Pas de hook useForm avec 47 options. Juste HTTP POST et logique côté serveur.",
      },
      realTalk: "<strong>Honnêtement:</strong> Ce site n'a pas de pipeline de construction, pas d'hydratation, pas de bibliothèque de gestion d'état côté client et aucun gestionnaire d'API JSON. Chaque route renvoie HTML. La navigation se fait via HTTP. Les formulaires sont soumis au serveur. Le serveur pense, le navigateur rend. C'est appelé REST. Nous l'avons oublié.",
      demoButton: "Voir la démo",
      etymology: {
        title: "Que signifie le nom ?",
        text: "SHAB est un vieux mot d'argot anglais signifiant une personne désagréable et sournoise – quelqu'un qui coupe les coins, prend des raccourcis, évite le travail honnête. Du Green's Dictionary of Slang (1637+), il décrit quelqu'un de malhonnête ou miteux.",
        punchline: "Ce framework s'appelle SHAB parce que le développement web moderne est devenu exactement cela : un hack désagréable qui coupe les coins, prend des raccourcis et évite le travail honnête. Nous réclamons le nom.",
        source: "See <a href=\"https://greensdictofslang.com/entry/2zfo4rq\" target=\"_blank\">Green's Dictionary of Slang</a> (1637–1885)",
      },
    },
    manifesto: {
      title: "Le manifeste SHAB",
      subtitle: "Ou: comment nous avons accidentellement aggravé le développement web",
      section1: {
        title: "1. HTML est le produit final, pas un format intermédiaire",
        para1: "Le navigateur rend HTML. Pas JSON. Pas un arbre de réconciliation DOM virtuel. Pas un objet JavaScript sérialisé. HTML est ce que le navigateur de l'utilisateur affiche. Prétendre que les mises à jour DOM générées par JavaScript sont d'une façon ou d'une autre supérieures au HTML envoyé par le serveur, c'est comme refuser de manger à moins qu'un food truck ne le fasse sur votre route. Pourquoi?",
        para2: "Lorsque vous envoyez HTML du serveur, vous envoyez <em>la réponse</em>. Lorsque vous envoyez JSON, vous envoyez un plan que le navigateur doit interpréter, compiler, exécuter et ensuite seulement rendre. Nous avons appelé cela \"optimisation.\"",
      },
      section2: {
        title: "2. HTTP est un protocole d'application, pas un tunnel JSON",
        para1: "HTTP a des verbes: GET, POST, PUT, DELETE. Il a des codes de statut. Il a des en-têtes de mise en cache. Il a un contrat bien défini et éprouvé entre le client et le serveur.",
        para2: "Au lieu de cela, nous avons construit des points de terminaison <code>POST /api/operations</code> qui font tout. Nous avons enveloppé REST dans JSON et l'avons appelé GraphQL. Nous avons inventé des \"points de terminaison\" qui ne sont pas vraiment des routes mais des fonctions dispatcher. Nous avons consommé le protocole de l'intérieur.",
        para3: "SHAB utilise HTTP comme prévu: GET pour la récupération, POST pour la mutation, le serveur répond avec l'état valide suivant. Ennuyeux. Prévisible. Fonctionne.",
      },
      section3: {
        title: "3. Le navigateur est un moteur de rendu de documents, pas une JVM",
        para1: "Netscape a expédié JavaScript pour rendre la validation des formulaires côté client. Nous avons pris cela et construit des systèmes d'exploitation entiers dans le navigateur. Nous compilons TypeScript en JavaScript pour s'exécuter dans un moteur V8 pour rendre HTML que le navigateur aurait pu rendre au chargement. Nous avons ajouté des gestionnaires de packages pour gérer les dépendances des interpréteurs qui exécutent notre JavaScript. Nous menons une farce élaborée à nous-mêmes.",
        para2: "Le travail du navigateur est de rendre HTML, de gérer l'entrée utilisateur et de communiquer avec le serveur. Il fait ces trois choses extrêmement bien. Tout le reste est du théâtre.",
      },
      section4: {
        title: "4. JavaScript est une épice, pas le plat principal",
        para1: "Un basculement de menu. Un spinner de chargement. Validation de formulaire. Une info-bulle. Ce sont les utilisations légitimes de JavaScript en 2025.",
        para2: "Rendre une liste? Le travail du serveur. Gérer l'état? Le travail du serveur. Routage? Le travail du serveur. Mise en cache? Le travail du HTTP (que le navigateur comprend nativement). Authentification? Le travail du serveur.",
        para3: "Mais d'une façon ou d'une autre, nous avons décidé que le navigateur devrait tout faire. Et nous avons construit des frameworks pour aider. Et nous avons construit des outils de construction pour compiler ces frameworks. Et nous avons ajouté des linters et des formatters et des bibliothèques de test. Et nous appelons cela \"développement web moderne.\"",
        para4: "Alpine.js existe parce que vous avez parfois besoin de JavaScript. Mais c'est 700 octets. SHAB l'utilise comme garniture, pas l'assiette.",
      },
      section5: {
        title: "5. Le pipeline de construction est un symptôme, pas une solution",
        para1: "Quand vous avez besoin de Webpack, Vite, esbuild, Rollup et une configuration Babel personnalisée juste pour exécuter votre serveur de développement, vous avez déjà perdu.",
        para2: "Le serveur exécute JavaScript (Bun). Le navigateur reçoit HTML. Aucune étape de compilation. Aucun tree-shaking. Aucune stratégie de fractionnement du code. Pas de \"points d'entrée.\"",
        para3: "Enregistrez un fichier. Le serveur recharge. La page recharge. C'est ça le \"web.\"",
      },
      section6: {
        title: "6. La soumission de formulaire est une fonctionnalité, pas un problème",
        para1: "À un moment donné, nous avons décidé que les formulaires HTML étaient l'ennemi. La soumission de formulaire recharge la page? Empêchons cela avec JavaScript et gérons-le avec XHR. Maintenant, nous devons gérer les états de chargement, les états d'erreur, les états de succès. Maintenant, nous avons besoin d'une bibliothèque de gestion d'état. Maintenant, nous avons besoin de DevTools. Maintenant, notre bundle est 200KB.",
        para2: "SHAB utilise HTMX pour intercepter la soumission de formulaire et échanger la réponse dans la page. Aucun rechargement. Aucun bundle JavaScript. Aucune gestion d'état. Juste HTTP. Le navigateur comprend déjà les formulaires. Nous avons juste changé qui voit la réponse.",
      },
      section7: {
        title: "7. La mise en cache est gratuite; nous l'avons juste oubliée",
        para1: "HTTP a des en-têtes de mise en cache. Le navigateur a un cache. Les CDN existent. Au lieu de cela, nous avons construit des gestionnaires d'état côté client avec leurs propres stratégies de cache busting.",
        para2: "Avec les réponses HTML, vous obtenez la mise en cache du navigateur, la mise en cache du CDN, la mise en cache du service worker – tout gratuitement. Parce que ce sont des ressources HTTP. Parce que le web a été conçu en pensant à la mise en cache.",
      },
      summary: {
        title: "Résumé",
        para1: "SHAB n'est pas une innovation. C'est de l'archéologie. Nous déterrons les principes REST originaux et les modèles HTML-over-the-wire qui ont fonctionné pendant des décennies. Nous les avons enveloppés dans des outils modernes (Bun, HTMX, Alpine) pour qu'ils fonctionnent en 2025.",
        para2: "La raison pour laquelle cela semble radical, c'est que nous avons passé 15 ans à construire l'exact opposé. Mais la raison pour laquelle cela semble bon, c'est que HTTP et HTML ne sont pas des erreurs. Nous avons juste été convaincus qu'ils l'étaient.",
      },
    },
    demo: {
      title: "Démo interactive",
      subtitle: "HTMX + Alpine en action. HTML sur le fil.",
      section1: {
        title: "1. Soumission de formulaire avec HTMX",
        desc: "Soumettez un formulaire. HTMX l'intercepte, l'envoie au serveur et échange la réponse. Aucun rechargement de page. Le serveur valide et répond avec HTML.",
        whatHappened: "Ce qui s'est passé",
        explanation: "HTMX a posté les données du formulaire au serveur. Le serveur les a validées. Le serveur a renvoyé du HTML. HTMX l'a échangé. Pas de JSON. Pas de traitement de formulaire côté client. Pas de gestionnaire d'état.",
      },
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "E-mail",
        emailPlaceholder: "votre@email.com",
        submit: "Soumettre",
        submitting: "Soumission en cours...",
      },
      section2: {
        title: "2. Édition en ligne avec Alpine.js",
        desc: "Cliquez pour modifier. Alpine bascule entre le mode d'affichage et le mode d'édition. À l'enregistrement, HTMX l'envoie au serveur et échange la réponse.",
        save: "Enregistrer",
        cancel: "Annuler",
        whatHappened: "Ce qui s'est passé",
        explanation: "Alpine bascule l'interface utilisateur. Quand vous cliquez sur Enregistrer, JavaScript construit un formulaire et l'envoie via fetch. Le serveur répond avec HTML. Nous l'échangeons. Le titre est mis à jour.",
      },
      section3: {
        title: "3. Échange de fragments",
        desc: "HTMX peut demander et échanger des fragments spécifiques de la page. Cliquez sur un bouton, HTMX obtient du nouveau contenu, met à jour cette section.",
        button: "Actualiser le fragment",
        fragmentText: "C'est un fragment. Cliquez sur le bouton ci-dessus pour obtenir un nouvel horodatage du serveur.",
        generatedAt: "Généré à",
        whatHappened: "Ce qui s'est passé",
        explanation: "HTMX a ciblé ce div spécifique et a échangé son HTML interne. Vous pouvez demander n'importe quelle route de serveur et échanger n'importe quelle partie de la page.",
      },
      section4: {
        title: "4. Confirmation de suppression",
        desc: "Les dialogues de confirmation sont entièrement gérés par HTMX. Supprimez un élément, confirmez l'action et observez le serveur gérer l'état.",
        button: "Supprimer l'élément",
        confirmText: "Êtes-vous sûr?",
        yesButton: "Oui, supprimer",
        noButton: "Annuler",
        successMessage: "Élément supprimé avec succès.",
      },
      section5: {
        title: "5. États de chargement",
        desc: "HTMX peut déclencher des spinners de chargement et des indicateurs d'état. Montrez aux utilisateurs que quelque chose se passe, entièrement géré par le serveur.",
        button: "Récupérer les données",
        loadingText: "Chargement...",
        dataText: "Voici les données qui ont été récupérées.",
      },
      section6: {
        title: "6. Recherche & Filtrage",
        desc: "Filtrage de recherche en direct sans gestion d'état JavaScript côté client. Chaque frappe interroge le serveur.",
        searchPlaceholder: "Rechercher des éléments...",
        searchText: "Tapez pour filtrer:",
      },
      section7: {
        title: "7. Tri de tableau",
        desc: "Cliquez sur les en-têtes de colonne pour trier. HTMX envoie le paramètre de tri, le serveur renvoie le HTML trié.",
        nameColumn: "Nom",
        emailColumn: "Email",
        scoreColumn: "Score",
      },
      section8: {
        title: "8. Mises à jour en temps réel",
        desc: "Sondage HTMX: demandez des données fraîches toutes les 2 secondes. Le serveur renvoie du HTML mis à jour. Pas besoin de WebSocket.",
        updateButton: "Interroger les mises à jour",
        stopButton: "Arrêter l'interrogation",
      },
      whatThisDemons: {
        title: "Ce que cela démontre:",
        items: [
          {
            label: "Les formulaires fonctionnent.",
            desc: "Le serveur traite la validation et répond avec HTML ou un retour d'erreur.",
          },
          {
            label: "Aucun rechargement de page.",
            desc: "HTMX intercepte les requêtes HTTP normales et échange la réponse dans le DOM.",
          },
          {
            label: "Alpine pour l'état local.",
            desc: "Mode d'édition, spinners, conditionnels – tout est géré par Alpine sans toucher au serveur.",
          },
          {
            label: "Interactions réactives.",
            desc: "Cela semble une SPA, mais le serveur a tout rendu.",
          },
          {
            label: "Zéro gestion d'état côté client.",
            desc: "Alpine n'a pas de store. HTMX n'a pas de cache. Le serveur est la seule source de vérité.",
          },
        ],
      },
    },
    about: {
      title: "À propos de SHAB Stack",
      intro: "Comprenez la pile SHAB: Server-Side Rendering, HTMX, Alpine.js et Bun travaillent ensemble pour construire des applications web modernes de manière simple.",
      whatEachLetterMeans: "Ce que chaque lettre signifie:",
      s: {
        title: "S – Rendu côté serveur (SSR)",
        para1: "HTML est généré sur le serveur. Quand une demande arrive, le serveur a tout ce dont il a besoin: accès à la base de données, modèles, logique. Il rend le HTML final et l'envoie au navigateur. Le navigateur reçoit un document prêt à afficher.",
        label1: "Pas d'hydratation.",
        para2: "Pas d'exécution de JavaScript sur le client pour reproduire l'état côté serveur. Vous envoyez HTML. Le navigateur l'affiche. Terminé.",
      },
      h: {
        title: "H – HTMX",
        para1: "HTMX est une petite bibliothèque (14KB) qui ajoute des attributs HTML pour un comportement de type AJAX. <code>hx-get</code>, <code>hx-post</code>, etc.",
        para2: "Quand vous cliquez sur un lien avec <code>hx-boost=\"true\"</code>, au lieu d'un rechargement complet de la page, HTMX fait une demande et échange la réponse dans le DOM. Navigation instantanée. Pas de flash blanc. Pas de perte d'état. Le serveur envoie toujours HTML.",
        label1: "C'est toujours REST.",
        para3: "Nous interceptons simplement le comportement HTTP naturel du navigateur et le rendons plus fluide.",
      },
      a: {
        title: "A – Alpine.js",
        para1: "Alpine.js est une bibliothèque JavaScript réactive de 16KB. C'est comme Vue ou React, mais destiné à de petits morceaux isolés d'interactivité.",
        para2: "Utilisez-le pour: basculements de menu, spinners de chargement, retour de validation de formulaire, conditionnels dans le DOM.",
        label1: "Pas pour le rendu.",
        para3: "Pas pour la gestion d'état. Pas pour le routage. Juste le comportement d'interface utilisateur local et éphémère. Alpine est livré en tant que script CDN; aucune mise en paquet requise.",
      },
      b: {
        title: "B – Bun",
        para1: "Bun est un exécution JavaScript moderne, comme Node.js ou Deno, mais plus rapide et construit à partir de zéro en Zig.",
        para2: "Ici, nous l'utilisons pour exécuter le serveur. Aucune dépendance sur les éléments internes de Node. Aucun npm/pnpm/yarn. Juste <code>bun install</code> et <code>bun run</code>. Démarrage rapide, exécution rapide.",
        label1: "Le seul exécution.",
        para3: "Nous ne transposons pas pour Node. Nous exécutons Bun directement.",
      },
      comparison: {
        title: "Comment cela se compare à Next.js (ou à tout framework SPA moderne):",
        aspect: "Aspect",
        shab: "SHAB",
        nextjs: "Next.js / SPA",
        row1: {
          label: "Pipeline de construction",
          shab: "Aucun. `bun run server.ts`",
          nextjs: "webpack/esbuild/turbopack, configuration complexe",
        },
        row2: {
          label: "JavaScript envoyé au navigateur",
          shab: "~30KB (HTMX + Alpine CDN)",
          nextjs: "100KB–500KB+ après tree-shaking",
        },
        row3: {
          label: "Temps pour devenir interactif (TTI)",
          shab: "~100ms (pas d'analyse JS, HTML déjà renderable)",
          nextjs: "2–5 secondes (analyse JS, exécution, hydratation)",
        },
        row4: {
          label: "Soumission de formulaire",
          shab: "HTMX POST → réponse HTML → échange DOM",
          nextjs: "preventDefault(), gérer en JS, setState, re-rendre",
        },
        row5: {
          label: "Routage",
          shab: "Côté serveur. HTMX intercepte les liens.",
          nextjs: "Routeur côté client en JavaScript",
        },
        row6: {
          label: "Couche API",
          shab: "Le serveur rend HTML directement",
          nextjs: "API JSON + rendu de modèle côté client",
        },
        row7: {
          label: "Complexité du développement",
          shab: "Modéré (templating côté serveur)",
          nextjs: "Élevé (gestion d'état, hydratation, configuration de construction)",
        },
        row8: {
          label: "Quand utiliser",
          shab: "Sites de contenu, tableaux de bord, applications web traditionnelles",
          nextjs: "Interfaces utilisateur complexes, animations, applications hors ligne, jeux",
        },
      },
      philosophy: {
        title: "Différences clés de philosophie:",
        items: [
          {
            label: "Le serveur est la source de vérité.",
            desc: "Pas Redux, pas Zustand, pas React Context. Le serveur a les données. Le serveur rend l'interface utilisateur.",
          },
          {
            label: "HTTP est le protocole.",
            desc: "Nous ne prétendons pas qu'il n'existe pas ou ne le cachons. Nous l'utilisons.",
          },
          {
            label: "HTML est du code.",
            desc: "Pas un modèle que JavaScript manipule. HTML comme sortie livrable.",
          },
          {
            label: "JavaScript est optionnel.",
            desc: "Si la page fonctionne sans lui, JavaScript est une amélioration UX, pas la base.",
          },
          {
            label: "Déploiement plus simple.",
            desc: "Aucune construction frontend séparée. Aucune API séparée. Un serveur, un processus.",
          },
        ],
      },
      whenNotToUse: {
        title: "Quand NE PAS utiliser SHAB:",
        items: [
          {
            label: "Expériences multijoueurs en temps réel.",
            desc: "Si vous avez besoin de WebSockets et de mises à jour instantanées serveur-à-client, SHAB n'est pas approprié. (Bien que vous puissiez le superposer.)",
          },
          {
            label: "Interfaces utilisateur hautement interactives.",
            desc: "Animations complexes, glisser-déposer, édition collaborative – celles-ci pourraient bénéficier d'un framework SPA.",
          },
          {
            label: "Applications hors ligne en priorité.",
            desc: "SHAB suppose un client toujours connecté.",
          },
          {
            label: "Intégrations de bureau/natives.",
            desc: "SHAB est pour les navigateurs web.",
          },
        ],
      },
      demonstrates: {
        title: "Ce que ce site démontre:",
        items: [
          {
            label: "Zéro pipeline de construction JavaScript.",
            desc: "Pas de Webpack, pas de Vite. Compilation JSX côté serveur uniquement.",
          },
          {
            label: "Navigation sans rechargement de page.",
            desc: "HTMX `hx-boost` sur les liens.",
          },
          {
            label: "Soumission de formulaire via HTTP.",
            desc: "Le serveur valide et répond avec HTML.",
          },
          {
            label: "Alpine.js pour l'état local.",
            desc: "Comme la démo d'édition en ligne.",
          },
          {
            label: "Un serveur unifié.",
            desc: "Pas de \"frontend\" et \"backend\" séparés. Juste un serveur qui rend HTML.",
          },
        ],
      },
    },
  },
  pl: {
    routes: {
      home: "",
      manifesto: "manifest",
      demo: "demo",
      docs: "dokumentacja",
      about: "o-projekcie",
      howWeGotHere: "jak-tu-doszlismy",
    },
    nav: {
      home: "Strona główna",
      manifesto: "Manifest",
      demo: "Demo",
      docs: "Dokumentacja",
      about: "O projekcie",
      howWeGotHere: "Jak tu doszliśmy",
    },
    footer: {
      line1: "© 2025 SHAB Stack. Renderowany po stronie serwera. HTML. To wszystko.",
      line2: "Brak SPA. Brak hydratacji. Brak potoku budowania JavaScript. Tylko HTTP i HTML.",
    },
    home: {
      title: "HTML po stronie serwera. Bez SPA. Bez iluzji.",
      subtitle: "Sieć działała świetnie w 1999 roku. Od tamtego czasu ją komplikujemy.",
      feature1: {
        title: "Co to jest SHAB?",
        body: "<strong>S</strong>erver-Side Rendering (HTML na serwerze, kropka)<br /><strong>H</strong>TMX (poproś serwer o HTML, wymień go w DOM)<br /><strong>A</strong>lpine.js (maleńkie porcje interaktywności, jeśli potrzeba)<br /><strong>B</strong>un (środowisko uruchomieniowe. Tylko Bun. Bez Node. Bez Deno.)",
      },
      feature2: {
        title: "Bez Biblii Framework JavaScript",
        body: "Przeglądarka wie, jak renderować HTML. Serwer wie, jak go wygenerować. HTTP wie, jak go przesłać. To nie jest objawienie. To tylko architektura, która nie wymaga doktoratu z wewnętrznych mechanizmów React.",
      },
      feature3: {
        title: "Nawigacja bez przeładowania",
        body: "Kliknij link. HTMX go przechwytuje. Serwer wysyła HTML. Przeglądarka go wymienia. Bez białego błysku. Bez teatru z \"ładowaniem...\" spinnerem. Czyste i mechaniczne.",
      },
      feature4: {
        title: "Formularze, które po prostu działają",
        body: "Wyślij formularz. Serwer waliduje. Serwer odpowiada HTML-em. Bez biblioteki walidacji po stronie klienta. Bez managera stanu formularza. Bez hooka useForm z 47 opcjami. Tylko HTTP POST i logika po stronie serwera.",
      },
      realTalk: "<strong>Szczerze mówiąc:</strong> Ta strona nie ma potoku budowania, brak hydratacji, brak biblioteki zarządzania stanem po stronie klienta i brak obsługi API JSON. Każda trasa zwraca HTML. Nawigacja odbywa się przez HTTP. Formularze są przesyłane do serwera. Serwer myśli, przeglądarka renderuje. To się nazywa REST. Zapomniliśmy o tym.",
      demoButton: "Zobacz demo",
      etymology: {
        title: "Co oznacza nazwa?",
        text: "SHAB to stare angielskie słowo slangu oznaczające nieprzyjemną, podstępną osobę – kogoś, kto tnie koszty, idzie na skróty, unika uczciwej pracy. Z Green's Dictionary of Slang (1637+), opisuje kogoś nieuczciwego lub wycieranymi.",
        punchline: "Ten framework nazwany SHAB dlatego, że współczesny rozwój sieci stał się dokładnie tym: nieprzyjemnym hackem, który tnie koszty, idzie na skróty i unika uczciwej pracy. Odzyskujemy nazwę.",
        source: "See <a href=\"https://greensdictofslang.com/entry/2zfo4rq\" target=\"_blank\">Green's Dictionary of Slang</a> (1637–1885)",
      },
    },
    manifesto: {
      title: "Manifest SHAB",
      subtitle: "Lub: Jak przypadkowo pogorszyliśmy programowanie web'owe",
      section1: {
        title: "1. HTML jest produktem końcowym, nie formatem pośrednim",
        para1: "Przeglądarka renderuje HTML. Nie JSON. Nie wirtualne drzewo uzgadniania DOM. Nie serializowany obiekt JavaScript. HTML to to, co wyświetla przeglądarka użytkownika. Udawanie, że aktualizacje DOM generowane przez JavaScript są jakoś lepsze niż HTML wysłany przez serwer, to jak odmowa jedzenia, chyba że ciężarówka z jedzeniem robi to na Twojej drodze. Dlaczego?",
        para2: "Kiedy wysyłasz HTML z serwera, wysyłasz <em>odpowiedź</em>. Kiedy wysyłasz JSON, wysyłasz plan, który przeglądarka musi interpretować, kompilować, wykonywać i dopiero wtedy renderować. Nazwaliśmy to \"optymalizacją.\"",
      },
      section2: {
        title: "2. HTTP jest protokołem aplikacji, a nie tunelem JSON",
        para1: "HTTP ma czasowniki: GET, POST, PUT, DELETE. Ma kody statusu. Ma nagłówki buforowania. Ma dobrze zdefiniowany, sprawdzony kontrakt między klientem a serwerem.",
        para2: "Zamiast tego zbudowaliśmy punkty końcowe <code>POST /api/operations</code>, które robią wszystko. Zawineliśmy REST w JSON i nazwaliśmy to GraphQL. Wymyśliśmy \"punkty końcowe\", które nie są naprawdę trasami, ale funkcjami dyspozytora. Konsumowaliśmy protokół od wewnątrz.",
        para3: "SHAB używa HTTP tak, jak przeznaczono: GET do pobierania, POST do mutacji, serwer odpowiada następnym stanem ważnym. Nudne. Przewidywalne. Działa.",
      },
      section3: {
        title: "3. Przeglądarka to renderer dokumentów, a nie JVM",
        para1: "Netscape wysłał JavaScript, aby umożliwić walidację formularzy po stronie klienta. Wzięliśmy to i zbudowaliśmy całe systemy operacyjne w przeglądarce. Kompilujemy TypeScript na JavaScript do uruchomienia w silniku V8 do renderowania HTML'a, który przeglądarka mogła renderować przy ładowaniu. Dodaliśmy menedżery pakietów do zarządzania zależnościami interpretatorów uruchamiających nasz JavaScript. Prowadzimy na siebie zaawansowany dowcip.",
        para2: "Zadaniem przeglądarki jest renderowanie HTML, obsługa danych wejściowych użytkownika i komunikacja z serwerem. Robi te trzy rzeczy niezwykle dobrze. Wszystko inne to teatr.",
      },
      section4: {
        title: "4. JavaScript to przyprawka, nie główne danie",
        para1: "Przełącznik menu. Spinner ładowania. Walidacja formularza. Podpowiedź. To są legalne zastosowania JavaScript w 2025 roku.",
        para2: "Renderować listę? To zadanie serwera. Zarządzać stanem? To zadanie serwera. Routing? To zadanie serwera. Buforowanie? To zadanie HTTP (które przeglądarka rozumie natywnie). Uwierzytelnianie? To zadanie serwera.",
        para3: "Ale jakoś zdecydowaliśmy, że przeglądarka powinna robić wszystko. I zbudowaliśmy frameworki, żeby pomóc. I zbudowaliśmy narzędzia budowania do kompilowania tych frameworków. I dodaliśmy lintery i formatery i biblioteki testów. I to nazywamy \"nowoczesnym programowaniem web'owym.\"",
        para4: "Alpine.js istnieje, ponieważ czasami potrzebujesz JavaScript. Ale to 700 bajtów. SHAB używa go jako garniru, nie talerza.",
      },
      section5: {
        title: "5. Potok budowania to symptom, nie rozwiązanie",
        para1: "Kiedy potrzebujesz Webpack, Vite, esbuild, Rollup i niestandardowej konfiguracji Babel tylko do uruchomienia serwera deweloperskiego, już przegrałeś.",
        para2: "Serwer uruchamia JavaScript (Bun). Przeglądarka otrzymuje HTML. Żaden krok kompilacji. Brak tree-shakingu. Brak strategii podziału kodu. Brak \"punktów wejścia.\"",
        para3: "Zapisz plik. Serwer się przeładowuje. Strona się przeładowuje. To się nazywa \"sieć.\"",
      },
      section6: {
        title: "6. Przesyłanie formularza to funkcja, a nie problem",
        para1: "W pewnym momencie zdecydowaliśmy, że formularze HTML to wróg. Przesłanie formularza przeładowuje stronę? Zapobiegajmy temu za pomocą JavaScript i obsługujemy XHR. Teraz musimy zarządzać stanami ładowania, stanami błędów, stanami sukcesu. Teraz potrzebujemy biblioteki zarządzania stanem. Teraz potrzebujemy DevTools. Teraz nasz pakiet ma 200KB.",
        para2: "SHAB używa HTMX do przechwycenia przesłania formularza i zamiany odpowiedzi na stronie. Brak przeładowania. Brak pakietu JavaScript. Brak zarządzania stanem. Tylko HTTP. Przeglądarka już rozumie formularze. Zmieniliśmy tylko, kto widzi odpowiedź.",
      },
      section7: {
        title: "7. Buforowanie jest darmowe; po prostu o tym zapomnieliśmy",
        para1: "HTTP ma nagłówki buforowania. Przeglądarka ma pamięć podręczną. Istnieją CDN. Zamiast tego zbudowaliśmy menedżery stanu po stronie klienta z własnymi strategiami czyszczenia pamięci podręcznej.",
        para2: "Dzięki odpowiedziom HTML otrzymujesz buforowanie przeglądarki, buforowanie CDN, buforowanie pracownika serwisowego – wszystko za darmo. Ponieważ to są zasoby HTTP. Ponieważ sieć została zaprojektowana z myślą o buforowaniu.",
      },
      summary: {
        title: "Streszczenie",
        para1: "SHAB to nie innowacja. To archeologia. Kopaliśmy pierwotne zasady REST i wzory HTML-over-the-wire, które działały przez dziesięciolecia. Owineliśmy je w nowoczesne narzędzia (Bun, HTMX, Alpine), aby działały w 2025 roku.",
        para2: "Powód, dla którego to wygląda radykalnie, to fakt, że spędziliśmy 15 lat na budowaniu dokładnego przeciwieństwa. Ale powód, dla którego wygląda dobrze, to fakt, że HTTP i HTML nie są błędami. Po prostu byliśmy o tym przekonani.",
      },
    },
    demo: {
      title: "Interaktywna demo",
      subtitle: "HTMX + Alpine w akcji. HTML po przewodzie.",
      section1: {
        title: "1. Przesyłanie formularza za pomocą HTMX",
        desc: "Prześlij formularz. HTMX go przechwytuje, wysyła go do serwera i wymienia odpowiedź. Brak przeładowania strony. Serwer waliduje i odpowiada za pomocą HTML.",
        whatHappened: "Co się stało",
        explanation: "HTMX wysłał dane formularza do serwera. Serwer je zwalidował. Serwer wysłał HTML. HTMX go wymienił. Żaden JSON. Żadna obsługa formularza po stronie klienta. Żaden menedżer stanu.",
      },
      form: {
        name: "Nazwa",
        namePlaceholder: "Twoja nazwa",
        email: "E-mail",
        emailPlaceholder: "twoj@email.com",
        submit: "Prześlij",
        submitting: "Przesyłanie...",
      },
      section2: {
        title: "2. Edycja wbudowana za pomocą Alpine.js",
        desc: "Kliknij, aby edytować. Alpine przełącza się między trybem widoku a trybem edycji. Przy zapisywaniu HTMX wysyła go do serwera i wymienia odpowiedź.",
        save: "Zapisz",
        cancel: "Anuluj",
        whatHappened: "Co się stało",
        explanation: "Alpine przełącza interfejs użytkownika. Kliknięcie na Zapisz powoduje, że JavaScript konstruuje formularz i wysyła go przez fetch. Serwer odpowiada HTML'em. Wymieniamy go. Nagłówek się aktualizuje.",
      },
      section3: {
        title: "3. Zamiana fragmentów",
        desc: "HTMX może żądać i zamieniać określone fragmenty strony. Kliknij przycisk, HTMX otrzymuje nową zawartość, aktualizuje tę sekcję.",
        button: "Odśwież fragment",
        fragmentText: "To jest fragment. Kliknij przycisk powyżej, aby uzyskać świeży znacznik czasu z serwera.",
        generatedAt: "Wygenerowano o",
        whatHappened: "Co się stało",
        explanation: "HTMX wycelował ten konkretny div i wymienił jego wewnętrzny HTML. Możesz żądać dowolnej trasy serwera i zamieniać dowolną część strony.",
      },
      section4: {
        title: "4. Potwierdzenie usunięcia",
        desc: "Dialogi potwierdzenia obsługiwane całkowicie przez HTMX. Usuń element, potwierdź akcję i obserwuj, jak serwer obsługuje stan.",
        button: "Usuń element",
        confirmText: "Jesteś pewny?",
        yesButton: "Tak, usuń",
        noButton: "Anuluj",
        successMessage: "Element pomyślnie usunięty.",
      },
      section5: {
        title: "5. Stany ładowania",
        desc: "HTMX może wyzwolić spinnery ładowania i wskaźniki stanu. Pokaż użytkownikom, że coś się dzieje, całkowicie sterowane serwerem.",
        button: "Pobierz dane",
        loadingText: "Ładowanie...",
        dataText: "Oto pobrane dane.",
      },
      section6: {
        title: "6. Wyszukiwanie i filtrowanie",
        desc: "Filtrowanie wyszukiwania na żywo bez zarządzania stanem JavaScript po stronie klienta. Każdy naciśnięcie klawisza wysyła zapytanie do serwera.",
        searchPlaceholder: "Szukaj elementy...",
        searchText: "Wpisz do filtrowania:",
      },
      section7: {
        title: "7. Sortowanie tabeli",
        desc: "Kliknij nagłówki kolumn, aby sortować. HTMX wysyła parametr sortowania, serwer zwraca posortowany HTML.",
        nameColumn: "Nazwa",
        emailColumn: "Email",
        scoreColumn: "Wynik",
      },
      section8: {
        title: "8. Aktualizacje w czasie rzeczywistym",
        desc: "Sondowanie HTMX: żądaj świeżych danych co 2 sekundy. Serwer zwraca zaktualizowany HTML. Bez WebSocket.",
        updateButton: "Sonduj aktualizacje",
        stopButton: "Zatrzymaj sondowanie",
      },
      whatThisDemons: {
        title: "Co to demonstruje:",
        items: [
          {
            label: "Formularze działają.",
            desc: "Serwer obsługuje walidację i odpowiada za pomocą HTML lub opinii o błędach.",
          },
          {
            label: "Brak przeładowania strony.",
            desc: "HTMX przechwytuje normalne żądania HTTP i wymienia odpowiedź w DOM.",
          },
          {
            label: "Alpine do lokalnego stanu.",
            desc: "Tryb edycji, spinnery, warunkowe – wszystko obsługiwane przez Alpine bez dotykania serwera.",
          },
          {
            label: "Responsywne interakcje.",
            desc: "Wygląda jak SPA, ale serwer renderował wszystko.",
          },
          {
            label: "Zerowe zarządzanie stanem po stronie klienta.",
            desc: "Alpine nie ma sklepu. HTMX nie ma pamięci podręcznej. Serwer jest jedynym źródłem prawdy.",
          },
        ],
      },
    },
    about: {
      title: "O SHAB Stack",
      intro: "Zrozumieć stos SHAB: Server-Side Rendering, HTMX, Alpine.js i Bun pracują razem, aby budować nowoczesne aplikacje internetowe w prosty sposób.",
      whatEachLetterMeans: "Co oznacza każda litera:",
      s: {
        title: "S – Renderowanie po stronie serwera (SSR)",
        para1: "HTML jest generowany na serwerze. Kiedy przychodzi żądanie, serwer ma wszystko, czego potrzebuje: dostęp do bazy danych, szablony, logikę. Renderuje ostateczny HTML i wysyła go do przeglądarki. Przeglądarka otrzymuje dokument gotowy do wyświetlenia.",
        label1: "Brak hydratacji.",
        para2: "Brak wykonywania JavaScript na kliencie w celu odtworzenia stanu po stronie serwera. Wysyłasz HTML. Przeglądarka go wyświetla. Koniec.",
      },
      h: {
        title: "H – HTMX",
        para1: "HTMX to mała biblioteka (14KB), która dodaje atrybuty HTML dla zachowania podobnego do AJAX. <code>hx-get</code>, <code>hx-post</code>, itp.",
        para2: "Gdy klikniesz link z <code>hx-boost=\"true\"</code>, zamiast pełnego przeładowania strony, HTMX wykonuje żądanie i wymienia odpowiedź w DOM. Chwilowa nawigacja. Bez białego błysku. Bez utraty stanu. Serwer nadal wysyła HTML.",
        label1: "To nadal REST.",
        para3: "Po prostu przechwytujemy naturalne zachowanie HTTP przeglądarki i czynimy go gładszym.",
      },
      a: {
        title: "A – Alpine.js",
        para1: "Alpine.js to reaktywna biblioteka JavaScript o rozmiarze 16KB. To takie Vue lub React, ale przeznaczone do małych, izolowanych fragmentów interaktywności.",
        para2: "Używaj go do: przełączników menu, spinnerów ładowania, informacji zwrotnej walidacji formularza, warunków w DOM.",
        label1: "Nie do renderowania.",
        para3: "Nie do zarządzania stanem. Nie do routingu. Tylko lokalne, efemeryczne zachowanie interfejsu użytkownika. Alpine jest dostarczane jako skrypt CDN; nie jest wymagane pakowanie.",
      },
      b: {
        title: "B – Bun",
        para1: "Bun to nowoczesne środowisko uruchomieniowe JavaScript, takie jak Node.js lub Deno, ale szybsze i zbudowane od podstaw w Zig.",
        para2: "Tutaj używamy go do uruchomienia serwera. Żadne zależności od wewnętrznych elementów Node. Brak npm/pnpm/yarn. Po prostu <code>bun install</code> i <code>bun run</code>. Szybki start, szybka egzekucja.",
        label1: "Jedyne środowisko uruchomieniowe.",
        para3: "Nie transpilujemy dla Node. Bezpośrednio uruchamiamy Bun.",
      },
      comparison: {
        title: "Jak porównuje się do Next.js (lub dowolnego nowoczesnego frameworku SPA):",
        aspect: "Aspekt",
        shab: "SHAB",
        nextjs: "Next.js / SPA",
        row1: {
          label: "Potok budowania",
          shab: "Żaden. `bun run server.ts`",
          nextjs: "webpack/esbuild/turbopack, złożona konfiguracja",
        },
        row2: {
          label: "JavaScript wysłany do przeglądarki",
          shab: "~30KB (HTMX + Alpine CDN)",
          nextjs: "100KB–500KB+ po tree-shakingu",
        },
        row3: {
          label: "Czas do interaktywności (TTI)",
          shab: "~100ms (brak parsowania JS, HTML już renderowalne)",
          nextjs: "2–5 sekund (parsowanie JS, wykonanie, hydratacja)",
        },
        row4: {
          label: "Przesyłanie formularza",
          shab: "HTMX POST → odpowiedź HTML → zamiana DOM",
          nextjs: "preventDefault(), obsługa w JS, setState, re-render",
        },
        row5: {
          label: "Routing",
          shab: "Po stronie serwera. HTMX przechwytuje linki.",
          nextjs: "Router po stronie klienta w JavaScript",
        },
        row6: {
          label: "Warstwa API",
          shab: "Serwer renderuje HTML bezpośrednio",
          nextjs: "API JSON + renderowanie szablonów po stronie klienta",
        },
        row7: {
          label: "Złożoność programowania",
          shab: "Umiarkowana (tworzenie szablonów po stronie serwera)",
          nextjs: "Wysoka (zarządzanie stanem, hydratacja, konfiguracja budowania)",
        },
        row8: {
          label: "Kiedy używać",
          shab: "Witryny treści, pulpity nawigacyjne, tradycyjne aplikacje internetowe",
          nextjs: "Złożone interfejsy użytkownika, animacje, aplikacje bez połączenia, gry",
        },
      },
      philosophy: {
        title: "Kluczowe różnice w filozofii:",
        items: [
          {
            label: "Serwer jest źródłem prawdy.",
            desc: "Nie Redux, nie Zustand, nie React Context. Serwer ma dane. Serwer renderuje interfejs użytkownika.",
          },
          {
            label: "HTTP to protokół.",
            desc: "Nie udajemy, że go nie ma ani nie próbujemy go ukrywać. Używamy go.",
          },
          {
            label: "HTML to kod.",
            desc: "Nie szablon, który JavaScript manipuluje. HTML jako dostarczone dane wyjściowe.",
          },
          {
            label: "JavaScript jest opcjonalny.",
            desc: "Jeśli strona działa bez niego, JavaScript jest ulepszeniem UX, nie podstawą.",
          },
          {
            label: "Prostsze wdrażanie.",
            desc: "Żaden osobny budynek frontendowy. Żadna osobna API. Jeden serwer, jeden proces.",
          },
        ],
      },
      whenNotToUse: {
        title: "Kiedy NIE używać SHAB:",
        items: [
          {
            label: "Doświadczenia wieloosobowe w czasie rzeczywistym.",
            desc: "Jeśli potrzebujesz WebSocketów i natychmiastowych aktualizacji serwer-klient, SHAB nie jest odpowiedni. (Choć możesz go nałożyć.)",
          },
          {
            label: "Wysoce interaktywne interfejsy użytkownika.",
            desc: "Złożone animacje, przeciąganie i upuszczanie, edycja wspólna – mogą skorzystać z frameworku SPA.",
          },
          {
            label: "Aplikacje bez połączenia jako pierwsze.",
            desc: "SHAB zakłada, że klient jest zawsze połączony.",
          },
          {
            label: "Integracje z komputerem stacjonarnym/natywne.",
            desc: "SHAB jest dla przeglądarek internetowych.",
          },
        ],
      },
      demonstrates: {
        title: "Co ta strona demonstruje:",
        items: [
          {
            label: "Zerowy potok budowania JavaScript.",
            desc: "Brak Webpack, brak Vite. Tylko kompilacja JSX po stronie serwera.",
          },
          {
            label: "Nawigacja bez przeładowania strony.",
            desc: "HTMX `hx-boost` na linkach.",
          },
          {
            label: "Przesyłanie formularza przez HTTP.",
            desc: "Serwer waliduje i odpowiada za pomocą HTML.",
          },
          {
            label: "Alpine.js do lokalnego stanu.",
            desc: "Jak demo edycji wbudowanej.",
          },
          {
            label: "Jeden ujednolicony serwer.",
            desc: "Brak osobnego \"frontenddu\" i \"backendu\". Po prostu serwer, który renderuje HTML.",
          },
        ],
      },
    },
  },
};

export function t(lang: string, key: string): any {
  const langTranslations =
    translations[lang as keyof typeof translations] || translations.en;
  const keys = key.split(".");
  let result: any = langTranslations;
  for (const k of keys) {
    result = result?.[k];
  }
  return result || key;
}
