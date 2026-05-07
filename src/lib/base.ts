/** Préfixe du site (GitHub Pages projet). Toujours avec slash final. */
export function siteBase(): string {
  const b = import.meta.env.BASE_URL;
  // In local dev, BASE_URL can be "/" even when Astro config base is set.
  // Keep project base so supports/ assets resolve correctly.
  if (b === "/" || !b) return "/BarbaraAeschbacher/";
  return b.endsWith("/") ? b : `${b}/`;
}
