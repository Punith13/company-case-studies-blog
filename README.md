# Company Lab — Daily company case studies

A searchable static site built with **Astro 7**, Markdown and Vercel, modelled after the companion [Go Journey](https://github.com/Punith13/go-learning-blog).

**Included studies:** Costco, Coca-Cola, BHP and Amazon. Every post explores the income statement, balance sheet and cash flow statement, and ends with a synthesis question.

## Run locally

Requires Node.js 22.23.4+.

~~~bash
npm install
npm run dev
npm run build
~~~

The homepage is at `/`, search/filter archive at `/studies/`, and individual case studies at `/studies/day-001-costco/` etc.

## Publish a new case study

Create `src/content/studies/day-NNN-slug.md`. Use frontmatter matching the existing files, giving each new study a unique `studyNumber`, valid official filing links and the correct study date. The index, article routes, previous/next navigation and RSS feed are generated automatically.

Follow the editorial requirements in [AGENTS.md](AGENTS.md).

## Deploy on Vercel

Import `Punith13/company-case-studies-blog` using the Astro preset. Use `npm run build` and output directory `dist`. Set `PUBLIC_SITE_URL` to the canonical Vercel/custom-domain URL when known. Merges to `main` can trigger deployment.

The GitHub Actions `site-check.yml` workflow validates builds on pull requests. It does **not** create articles or invoke AI automatically. The ChatGPT scheduled company studies and website publishing are currently separate; automated publication will require an authenticated writing agent, source verification, duplicate controls and review/approval policy.

For educational use only — not personalised investment advice.

