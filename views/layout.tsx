import { t } from '../i18n';
import { raw } from 'hono/html';

interface LayoutProps {
  lang: string;
  page: string;
  children: any;
}

export default function Layout({ lang, page, children }: LayoutProps) {
  const isActive = (p: string) => page === p ? "active" : "";
  
  // Map current page to route in each language
  const getRouteForLang = (targetLang: string) => {
    const routes = t(targetLang, "routes") as any;
    const route = routes[page] || "";
    return `/${targetLang}${route ? `/${route}` : ""}`;
  };

  return (
    <html lang={lang}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SHAB Stack – Server-Side HTML. No SPA. No Illusions.</title>
          <link rel="stylesheet" href="/public/styles.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
          <script src="https://unpkg.com/htmx.org@1.9.10"></script>
          <script src="https://unpkg.com/alpinejs@3.13.3/dist/cdn.min.js" defer></script>
        </head>
        <body>
        <header dangerouslySetInnerHTML={{__html: `
          <div class="header-content" x-data="{ mobileMenuOpen: false, langDropdownOpen: false }">
            <a href="/${lang}" class="logo-link">
              <h1 class="logo">SHAB</h1>
              <span class="logo-badge">Stack</span>
            </a>
            
            <button 
              type="button"
              class="mobile-menu-btn"
              @click="mobileMenuOpen = !mobileMenuOpen"
              aria-label="Toggle menu"
            >
              <span x-show="!mobileMenuOpen">☰</span>
              <span x-show="mobileMenuOpen" x-cloak>✕</span>
            </button>
            
            <nav class="nav-main" :class="{ 'mobile-open': mobileMenuOpen }" @click="mobileMenuOpen = false">
              <div class="nav-pages">
                <a href="/${lang}" class="nav-link ${isActive("home")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.home")}</a>
                <a href="/${lang}/${t(lang, "routes.about")}" class="nav-link ${isActive("about")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.about")}</a>
                <a href="/${lang}/${t(lang, "routes.manifesto")}" class="nav-link ${isActive("manifesto")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.manifesto")}</a>
                <a href="/${lang}/${t(lang, "routes.howWeGotHere")}" class="nav-link ${isActive("howWeGotHere")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.howWeGotHere")}</a>
                <a href="/${lang}/${t(lang, "routes.docs")}" class="nav-link ${isActive("docs")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.docs")}</a>
                <a href="/${lang}/${t(lang, "routes.demo")}" class="nav-link ${isActive("demo")}" hx-boost="true" hx-target="#main-content" hx-swap="innerHTML transition:true" hx-select="#main-content">${t(lang, "nav.demo")}</a>
              </div>
              
              <div class="lang-switcher" @click.stop @click.outside="langDropdownOpen = false">
                <button 
                  type="button"
                  class="lang-current"
                  @click="langDropdownOpen = !langDropdownOpen"
                >
                  <span>${lang === "en" ? "🇬🇧" : lang === "de" ? "🇩🇪" : lang === "fr" ? "🇫🇷" : "🇵🇱"}</span>
                  <span>${lang.toUpperCase()}</span>
                  <span style="font-size: 0.7rem;" x-text="langDropdownOpen ? '▲' : '▼'">▼</span>
                </button>
                
                <div class="lang-dropdown" x-show="langDropdownOpen" x-cloak style="display: none;">
                  <a href="${getRouteForLang("en")}" class="${lang === "en" ? "active" : ""}">
                    <span>🇬🇧</span>
                    <span>English</span>
                  </a>
                  <a href="${getRouteForLang("de")}" class="${lang === "de" ? "active" : ""}">
                    <span>🇩🇪</span>
                    <span>Deutsch</span>
                  </a>
                  <a href="${getRouteForLang("fr")}" class="${lang === "fr" ? "active" : ""}">
                    <span>🇫🇷</span>
                    <span>Français</span>
                  </a>
                  <a href="${getRouteForLang("pl")}" class="${lang === "pl" ? "active" : ""}">
                    <span>🇵🇱</span>
                    <span>Polski</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        `}}></header>

        <main id="main-content" hx-swap="innerHTML transition:true" class="container">
          {children}
        </main>

        {/* Demo Modal */}
        <div id="demo-modal" class="demo-modal"></div>

        {/* Call to Action Banner */}
        <section class="cta-banner">
          <div class="cta-content">
            <h2 class="cta-tagline">
              <span class="cta-word cta-line1">Make Internet</span>
              <span class="cta-word cta-line2">Great Again</span>
            </h2>
            <p class="cta-footnote">* Sorry. Couldn't resist. But you know what we mean.</p>
          </div>
        </section>

        <footer>
          <div class="container">
            <p>{t(lang, "footer.line1")}</p>
            <p style="font-size: 0.9rem; color: #666;">
              {t(lang, "footer.line2")}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
