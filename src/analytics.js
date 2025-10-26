// src/analytics.js
export function initGA() {
  // only run in production builds
  if (!import.meta.env.PROD) return;

  const id = import.meta.env.VITE_GA_ID; // set this as an env var
  if (!id) return;

  // load gtag
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  // init
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', id, { send_page_view: true });
}
