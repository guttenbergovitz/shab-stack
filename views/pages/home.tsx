import { t } from "../../i18n";

interface HomeProps {
  lang: string;
}

export default function Home({ lang }: HomeProps) {
  return (
    <div class="hero">
      <h1 class="tagline">
        <span class="tagline-line">Server-Side HTML.</span>
        <span class="tagline-line">No SPA.</span>
        <span class="tagline-line">No Illusions.</span>
      </h1>
      <div class="tagline-footnote">
        <span class="footnote-marker">*</span>
        <p>Meet <strong>SHAB</strong>—not a new idea, just throwing out all the bad ones we picked up along the way.</p>
      </div>
      <p class="subtitle">
        {t(lang, "home.subtitle")}
      </p>

      <div class="hero-content">
        <section class="feature">
          <h3>{t(lang, "home.feature1.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t(lang, "home.feature1.body") }} />
        </section>

        <section class="feature">
          <h3>{t(lang, "home.feature2.title")}</h3>
          <p>
            {t(lang, "home.feature2.body")}
          </p>
        </section>

        <section class="feature">
          <h3>{t(lang, "home.feature3.title")}</h3>
          <p>
            {t(lang, "home.feature3.body")}
          </p>
        </section>

        <section class="feature">
          <h3>{t(lang, "home.feature4.title")}</h3>
          <p>
            {t(lang, "home.feature4.body")}
          </p>
        </section>
      </div>

      <div class="real-talk">
        <p>
          <span dangerouslySetInnerHTML={{ __html: t(lang, "home.realTalk") }} />
        </p>
      </div>

      <div class="text-center">
        <a href={`/${lang}/${t(lang, "routes.demo")}`} class="btn btn-primary" style="margin-right: 1rem;">
          {t(lang, "home.demoButton")} →
        </a>
        <a href={`/${lang}/${t(lang, "routes.docs")}`} class="btn btn-secondary">
          Read Docs
        </a>
      </div>

      {/* Comparison Grid */}
      <section class="comparison-section">
        <h3>The Difference</h3>
        <p class="section-lead">
          Modern SPAs promise interactivity. They deliver complexity. Here's what you're actually trading.
        </p>
        <div class="comparison-grid">
          <div class="comparison-card bad">
            <h4>Modern SPA</h4>
            <ul>
              <li>500KB JavaScript bundle</li>
              <li>Hydration waterfall</li>
              <li>Client-side routing</li>
              <li>State management library</li>
              <li>Build pipeline (5 min)</li>
              <li>useEffect dependency hell</li>
              <li>JSON API + fetch</li>
            </ul>
          </div>
          <div class="comparison-card good">
            <h4>SHAB Stack</h4>
            <ul>
              <li>~50KB total (HTMX + Alpine)</li>
              <li>No hydration</li>
              <li>HTTP navigation</li>
              <li>Server has the state</li>
              <li>No build step</li>
              <li>No hooks, no effects</li>
              <li>HTML responses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section class="quote-section">
        <div class="quote-divider"></div>
        <blockquote class="framework-quote">
          <p class="quote-text">
            "I've been doing this for 20 years. We used to ship websites in kilobytes. Now we ship megabytes of JavaScript just to render a button. This isn't progress. This is insanity wrapped in tooling."
          </p>
          <cite class="quote-author">— Every senior developer, eventually</cite>
        </blockquote>
        <div class="quote-divider"></div>
      </section>

      {/* Tech Stack Details */}
      <section class="tech-stack-section">
        <h3>The Stack, Explained</h3>
        <p class="section-lead">
          Four tools. No build step. No framework religion. Just HTTP doing what it was designed to do.
        </p>
        <div class="tech-stack-grid">
          <div class="tech-item">
            <div class="tech-item-header">
              <i class="fa-solid fa-server"></i>
              <h4>SSR (e.g. Hono)</h4>
            </div>
            <p>Tiny (12KB), fast web framework. JSX support without React. Runs on Bun, Node, Deno, Cloudflare Workers.</p>
          </div>
          <div class="tech-item">
            <div class="tech-item-header">
              <i class="fa-solid fa-bolt"></i>
              <h4>HTMX</h4>
            </div>
            <p>14KB library. AJAX, WebSockets, SSE via HTML attributes. No JavaScript required. Server sends HTML, browser swaps it.</p>
          </div>
          <div class="tech-item">
            <div class="tech-item-header">
              <i class="fa-solid fa-mountain"></i>
              <h4>Alpine.js</h4>
            </div>
            <p>15KB for UI state. Dropdowns, modals, toggles. Think jQuery, but reactive. No build step, no Virtual DOM.</p>
          </div>
          <div class="tech-item">
            <div class="tech-item-header">
              <i class="fa-solid fa-rocket"></i>
              <h4>Bun</h4>
            </div>
            <p>Fast JavaScript runtime. Built-in TypeScript, JSX, bundler, test runner. 3x faster than Node. One tool, not twelve.</p>
          </div>
        </div>
      </section>

      <section class="why-exists">
        <h3>{t(lang, "home.whyExists.title")}</h3>
        <p>{t(lang, "home.whyExists.para1")}</p>
        <p>{t(lang, "home.whyExists.para2")}</p>
        <p>{t(lang, "home.whyExists.para3")}</p>
        <p>{t(lang, "home.whyExists.para4")}</p>
      </section>

      <section class="etymology">
        <h3>{t(lang, "home.etymology.title")}</h3>
        <div class="etymology-content">
          <div class="etymology-definition">
            <span class="etymology-word">SHAB</span>
            <span class="etymology-phonetic">/ʃæb/</span>
            <span class="etymology-pos">noun, verb</span>
            <span class="etymology-date">1637–1885</span>
          </div>
          <p class="etymology-meaning">
            {t(lang, "home.etymology.text")}
          </p>
          <p class="etymology-punchline">
            {t(lang, "home.etymology.punchline")}
          </p>
          <p class="etymology-source">
            <span dangerouslySetInnerHTML={{ __html: t(lang, "home.etymology.source") }} />
          </p>
        </div>
      </section>
    </div>
  );
}
