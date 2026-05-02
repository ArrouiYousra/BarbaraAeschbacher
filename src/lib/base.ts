/** Préfixe du site (GitHub Pages projet). Toujours avec slash final. */
export function siteBase(): string {
  const b = import.meta.env.BASE_URL;
  if (b === "/" || !b) return "/";
  return b.endsWith("/") ? b : `${b}/`;
}
