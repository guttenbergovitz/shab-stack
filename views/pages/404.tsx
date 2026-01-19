const quotes = [
  "This page doesn't exist. Unlike your 500KB React bundle, which unfortunately does.",
  "404: Not Found. Much like the documentation for your last framework upgrade.",
  "Lost? At least you're not debugging a hydration mismatch.",
  "This page is missing. Your build pipeline has more steps than we have pages.",
  "Error 404: This page shipped less JavaScript than your 'Hello World' app.",
  "Page not found. But hey, at least we didn't send you a 2MB bundle to tell you that.",
  "404. This URL doesn't exist. Neither does a good reason to use client-side routing.",
  "Not found. Unlike the 47 useEffect dependencies you forgot to add.",
  "This page is gone. Like your sanity after explaining React Server Components.",
  "404: Missing. Just like the performance gains you were promised.",
  "Page not found. Try checking your node_modules folder—it's probably in there somewhere.",
  "Error 404. This page doesn't exist, but your webpack config has 300 lines.",
  "Lost? At least you're not trying to understand the difference between getStaticProps and getServerSideProps.",
  "404. This page is simpler than your state management library.",
  "Not found. Unlike the 15 different ways to fetch data in Next.js.",
  "This page doesn't exist. Your CI/CD pipeline takes longer than this site took to build.",
  "404: Gone. Like the simplicity of web development in 1999.",
  "Page not found. But we found 1.2 million packages in npm. Want those instead?",
  "Error 404. This page is missing, but your React app has 47 context providers.",
  "Not found. Try npm install—that usually makes things worse.",
];

export default function NotFound({ lang }: { lang: string }) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div class="not-found-page">
      <div class="not-found-content">
        <h1 class="not-found-title">404</h1>
        <h2 class="not-found-subtitle">Page Not Found</h2>
        <p class="not-found-quote">"{randomQuote}"</p>
        <div class="not-found-actions">
          <a href={`/${lang}`} class="btn btn-primary">Go Home</a>
          <a href={`/${lang}/${lang === "en" ? "how-we-got-here" : lang === "de" ? "wie-wir-hierher-kamen" : lang === "fr" ? "comment-nous-en-sommes-arrives-la" : "jak-tu-doszlismy"}`} class="btn btn-secondary">
            Read the Rant
          </a>
        </div>
        <p class="not-found-footer">
          At least this 404 page loaded instantly. No JavaScript framework required.
        </p>
      </div>
    </div>
  );
}
