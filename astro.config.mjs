import { defineConfig } from "astro/config";

/**
 * GitHub Pages — projet : URL = https://VOTRE_USER.github.io/NOM_DU_REPO/
 * Gardez `base` identique au nom du dépôt GitHub (sensible à la casse).
 *
 * Site utilisateur (repo username.github.io) : mettez base: "/" et
 * site: "https://VOTRE_USER.github.io"
 */
export default defineConfig({
  site: "https://example.github.io",
  base: "/BarbaraAeschbacher",
  publicDir: "./supports",
  trailingSlash: "ignore",
});
