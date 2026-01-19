import { t } from "../../i18n";

interface ManifestoProps {
  lang: string;
}

export default function Manifesto({ lang }: ManifestoProps) {
  const sections = [
    { id: "preamble", title: t(lang, "manifesto.section1.title") },
    { id: "problem", title: t(lang, "manifesto.section2.title") },
    { id: "solution", title: t(lang, "manifesto.section3.title") },
    { id: "principles", title: t(lang, "manifesto.section4.title") },
    { id: "tech", title: t(lang, "manifesto.section5.title") },
    { id: "not-for", title: t(lang, "manifesto.section6.title") },
    { id: "for", title: t(lang, "manifesto.section7.title") },
    { id: "summary", title: t(lang, "manifesto.summary.title") },
  ];

  return (
    <div class="manifesto-layout">
      {/* Sidebar */}
      <aside class="manifesto-sidebar">
        <div class="manifesto-sidebar-sticky">
          <h3>Contents</h3>
          <nav class="manifesto-nav">
            {sections.map(section => (
              <a key={section.id} href={`#${section.id}`} class="manifesto-nav-item">
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main class="manifesto-main">
        <div class="hero">
          <h2>{t(lang, "manifesto.title")}</h2>
          <p class="subtitle">{t(lang, "manifesto.subtitle")}</p>
          <p class="manifesto-date">Declared: January 2026</p>
        </div>

        <section id="preamble" class="manifesto-section">
          <h3><span class="section-number">I.</span> {t(lang, "manifesto.section1.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t(lang, "manifesto.section1.para1") }} />
          <p dangerouslySetInnerHTML={{ __html: t(lang, "manifesto.section1.para2") }} />
        </section>

        <section id="problem" class="manifesto-section">
          <h3><span class="section-number">II.</span> {t(lang, "manifesto.section2.title")}</h3>
          <p>{t(lang, "manifesto.section2.para1")}</p>
          <p dangerouslySetInnerHTML={{ __html: t(lang, "manifesto.section2.para2") }} />
          <p>{t(lang, "manifesto.section2.para3")}</p>
        </section>

        <section id="solution" class="manifesto-section">
          <h3><span class="section-number">III.</span> {t(lang, "manifesto.section3.title")}</h3>
          <p>{t(lang, "manifesto.section3.para1")}</p>
          <p>{t(lang, "manifesto.section3.para2")}</p>
        </section>

        <section id="principles" class="manifesto-section">
          <h3><span class="section-number">IV.</span> {t(lang, "manifesto.section4.title")}</h3>
          <p>{t(lang, "manifesto.section4.para1")}</p>
          <p>{t(lang, "manifesto.section4.para2")}</p>
          <p>{t(lang, "manifesto.section4.para3")}</p>
          <p>{t(lang, "manifesto.section4.para4")}</p>
        </section>

        <section id="tech" class="manifesto-section">
          <h3><span class="section-number">V.</span> {t(lang, "manifesto.section5.title")}</h3>
          <p>{t(lang, "manifesto.section5.para1")}</p>
          <p>{t(lang, "manifesto.section5.para2")}</p>
          <p>{t(lang, "manifesto.section5.para3")}</p>
        </section>

        <section id="not-for" class="manifesto-section">
          <h3><span class="section-number">VI.</span> {t(lang, "manifesto.section6.title")}</h3>
          <p>{t(lang, "manifesto.section6.para1")}</p>
          <p>{t(lang, "manifesto.section6.para2")}</p>
        </section>

        <section id="for" class="manifesto-section">
          <h3><span class="section-number">VII.</span> {t(lang, "manifesto.section7.title")}</h3>
          <p>{t(lang, "manifesto.section7.para1")}</p>
          <p>{t(lang, "manifesto.section7.para2")}</p>
        </section>

        <section id="summary" class="manifesto-section manifesto-final">
          <h3><span class="section-number">VIII.</span> {t(lang, "manifesto.summary.title")}</h3>
          <p>{t(lang, "manifesto.summary.para1")}</p>
          <p>{t(lang, "manifesto.summary.para2")}</p>
          <div class="manifesto-signature">
            <p><em>— The SHAB Stack Collective</em></p>
            <p><em>January 2026</em></p>
          </div>
        </section>
      </main>
    </div>
  );
}
