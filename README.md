# Rolé Potyguar — site

Site institucional do **Rolé Potyguar**, uma plataforma de experiência cultural, conteúdo e pertencimento que nasceu no Rio Grande do Norte.

Site estático: HTML, CSS e JavaScript puros, sem build, sem backend e sem dependências externas.

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Página principal. Todos os textos ficam aqui, cada seção marcada por comentário. |
| `css/styles.css` | Estilos. As cores, fontes e escala da marca ficam no bloco `:root`, no topo. |
| `js/main.js` | Animações de entrada, parallax do sol e barra fixa no celular. Respeita `prefers-reduced-motion`. |
| `assets/img/` | Logo, ilustrações e ícones (WebP/PNG). |
| `assets/fonts/` | Archivo e Archivo Black (SIL OFL, licença incluída). |
| `404.html` | Página de erro. |
| `robots.txt`, `sitemap.xml` | Rastreamento por buscadores. |
| `llms.txt` | Resumo oficial da marca para assistentes de IA. |
| `site.webmanifest` | Ícones e cores do app. |

## Publicar

Funciona em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

**GitHub Pages:** Settings → Pages → *Deploy from a branch* → `main` / `(root)`. O arquivo `.nojekyll` já está incluído.

O domínio oficial está configurado como `https://www.rolepotyguar.com.br/`. Se mudar, atualize em `index.html` (canonical, Open Graph e JSON-LD), `robots.txt`, `sitemap.xml` e `llms.txt`.

Depois de publicar, cadastre o site no Google Search Console e envie o `sitemap.xml`.
