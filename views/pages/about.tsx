import { Fragment, h } from "hono/jsx";
import { t } from "../../i18n";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  return (
    <div class="about">
      <div class="hero">
        <h2>{t(lang, "about.title")}</h2>
        <p class="subtitle">{t(lang, "about.intro")}</p>
      </div>

      <section class="about-section">
        <h3>{t(lang, "about.whatEachLetterMeans")}</h3>
        <div class="about-grid">
          <div class="about-item">
            <h4>{t(lang, "about.s.title")}</h4>
            <p dangerouslySetInnerHTML={{ __html: t(lang, "about.s.para1") }} />
            <p style="font-size: 0.9rem; color: #666;">
              <strong>{t(lang, "about.s.label1")}</strong> {t(lang, "about.s.para2")}
            </p>
          </div>

          <div class="about-item">
            <h4>{t(lang, "about.h.title")}</h4>
            <p dangerouslySetInnerHTML={{ __html: t(lang, "about.h.para1") }} />
            <p dangerouslySetInnerHTML={{ __html: t(lang, "about.h.para2") }} />
            <p style="font-size: 0.9rem; color: #666;">
              <strong>{t(lang, "about.h.label1")}</strong> {t(lang, "about.h.para3")}
            </p>
          </div>

          <div class="about-item">
            <h4>{t(lang, "about.a.title")}</h4>
            <p>{t(lang, "about.a.para1")}</p>
            <p>{t(lang, "about.a.para2")}</p>
            <p style="font-size: 0.9rem; color: #666;">
              <strong>{t(lang, "about.a.label1")}</strong> {t(lang, "about.a.para3")}
            </p>
          </div>

          <div class="about-item">
            <h4>{t(lang, "about.b.title")}</h4>
            <p>{t(lang, "about.b.para1")}</p>
            <p dangerouslySetInnerHTML={{ __html: t(lang, "about.b.para2") }} />
            <p style="font-size: 0.9rem; color: #666;">
              <strong>{t(lang, "about.b.label1")}</strong> {t(lang, "about.b.para3")}
            </p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <h3>{t(lang, "about.comparison.title")}</h3>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>{t(lang, "about.comparison.aspect")}</th>
              <th>{t(lang, "about.comparison.shab")}</th>
              <th>{t(lang, "about.comparison.nextjs")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{t(lang, "about.comparison.row1.label")}</strong></td>
              <td>{t(lang, "about.comparison.row1.shab")}</td>
              <td>{t(lang, "about.comparison.row1.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row2.label")}</strong></td>
              <td>{t(lang, "about.comparison.row2.shab")}</td>
              <td>{t(lang, "about.comparison.row2.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row3.label")}</strong></td>
              <td>
                {t(lang, "about.comparison.row3.shab")}
              </td>
              <td>{t(lang, "about.comparison.row3.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row4.label")}</strong></td>
              <td>{t(lang, "about.comparison.row4.shab")}</td>
              <td>{t(lang, "about.comparison.row4.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row5.label")}</strong></td>
              <td>{t(lang, "about.comparison.row5.shab")}</td>
              <td>{t(lang, "about.comparison.row5.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row6.label")}</strong></td>
              <td>{t(lang, "about.comparison.row6.shab")}</td>
              <td>{t(lang, "about.comparison.row6.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row7.label")}</strong></td>
              <td>{t(lang, "about.comparison.row7.shab")}</td>
              <td>{t(lang, "about.comparison.row7.nextjs")}</td>
            </tr>
            <tr>
              <td><strong>{t(lang, "about.comparison.row8.label")}</strong></td>
              <td>{t(lang, "about.comparison.row8.shab")}</td>
              <td>{t(lang, "about.comparison.row8.nextjs")}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="about-section">
        <h3>{t(lang, "about.philosophy.title")}</h3>
        <ul>
          {(t(lang, "about.philosophy.items") as any[]).map((item: any, idx: number) => (
            <li key={idx}>
              <strong>{item.label}</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>

      <section class="about-section">
        <h3>{t(lang, "about.whenNotToUse.title")}</h3>
        <ul>
          {(t(lang, "about.whenNotToUse.items") as any[]).map((item: any, idx: number) => (
            <li key={idx}>
              <strong>{item.label}</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>

      <section class="about-section disclaimer-section">
        <h3>The Honest Truth</h3>
        <p class="disclaimer-highlight">
          <strong>SHAB Stack is not the best way to build web applications.</strong>
        </p>
        <p><strong>The actual best way?</strong> Rust + WASM. Leptos, Yew, Dioxus. Compile to WebAssembly. Run at native speed. Type safety that actually means something. Zero runtime overhead.</p>
        <p>Rust was designed for systems programming. It's fast, safe, and doesn't have a garbage collector. WASM runs in the browser at near-native speed. This is the future.</p>
        <p>But let's be real: <strong>you're not going to learn Rust.</strong></p>
        <p>Not because you can't. Because your team won't. Because your deadlines won't allow it. Because explaining lifetimes and borrow checkers to your PM is not a conversation you want to have.</p>
        <p class="disclaimer-highlight">
          <strong>So if Rust is off the table, what's next?</strong>
        </p>
        <p>If you're starting from scratch, you should probably use:</p>
        <ul>
          <li><strong>Go + templ + HTMX</strong> – Fast, compiled, simple. No runtime overhead.</li>
          <li><strong>Python + FastAPI/Django + HTMX</strong> – Mature ecosystem, great libraries, easy deployment.</li>
          <li><strong>Elixir + Phoenix LiveView</strong> – Real-time without JavaScript. Elegant concurrency.</li>
          <li><strong>Even PHP + Laravel + HTMX</strong> – Yes, really. PHP got good again.</li>
        </ul>
        <p>These are all better choices than JavaScript on the server. They were designed for this. JavaScript was designed to validate forms in Netscape Navigator.</p>
        <p class="disclaimer-highlight">
          <strong>But if you're already a TypeScript developer...</strong>
        </p>
        <p>If you've been doing React/Next.js for years. If your team knows JSX and TypeScript and nothing else. If learning Go or Python feels like too big a leap right now.</p>
        <p><strong>This is your way out.</strong></p>
        <p>SHAB proves you don't need to abandon your entire skillset to escape the SPA nightmare. You can keep TypeScript. You can keep JSX. You just stop sending it to the browser.</p>
        <p>Think of this as a <strong>stepping stone</strong>. You're not ready to leave JavaScript entirely, but you're done with client-side rendering, hydration, and 500KB bundles.</p>
        <p>This is the pragmatic middle ground. Not the destination. Just a better place than where you were.</p>
        <p class="disclaimer-highlight">
          <strong>The ideal path? Learn Rust. Use Leptos. Build WASM apps.</strong>
        </p>
        <p>But we live in the real world. You have deadlines. You have a team that knows JavaScript. You have a codebase to maintain.</p>
        <p>Throwing pearls before swine is pointless. Use what works for your situation.</p>
        <p>For now? This works. And it's a hell of a lot better than what you're probably doing.</p>
      </section>

      <section class="about-section">
        <h3>{t(lang, "about.demonstrates.title")}</h3>
        <ul>
          {(t(lang, "about.demonstrates.items") as any[]).map((item: any, idx: number) => (
            <li key={idx}>
              <strong>{item.label}</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
