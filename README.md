# Company Lab — Understand the business behind the stock

A searchable, readable **company research publication** built with Astro 7, Markdown and Vercel, using the same stack as [Go Journey](https://github.com/Punith13/go-learning-blog).

The first four **fully worked** stories cover Costco, Coca-Cola, BHP and Amazon. Each article tells how the business earns money, walks through actual income statement, balance sheet and cash flow numbers, explains the calculations, and ends with a business takeaway. **No assignments or missing-number worksheets.**

## Develop locally

Requires Node.js 22.23.4+.

~~~bash
npm install
npm run dev
npm run build
~~~

Pages: / (home), /studies/ (searchable archive), /studies/day-001-costco/ and so on.

## Add a company story

Create src/content/studies/day-NNN-company.md with unique studyNumber and valid frontmatter matching an existing article. Select the next company for learning value and variation. Follow [AGENTS.md](AGENTS.md): source figures from current official filings, state reporting periods, show **worked** calculations and insights, and write a self-contained narrative suitable for reading end-to-end.

The archive, site index, neighbouring stories and RSS feed update on a successful build.

## Deploy

Import Punith13/company-case-studies-blog into Vercel with Astro, build command npm run build and output directory dist. Set PUBLIC_SITE_URL to the real production URL when known. Commits on main trigger deployments when GitHub is connected to Vercel.

The repo contains build-check automation, **not a scheduled AI content publisher**. Daily ChatGPT studies and GitHub publishing are currently separate workflows. A publishing agent needs authenticated GitHub access, source verification and safety checks.

For education only; not personalised investment advice.
