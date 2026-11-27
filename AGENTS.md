# Company Lab: editorial guide for complete, enjoyable case studies

**Goal:** Publish one self-contained, well-researched and easy-to-read company story at a time. The reader should learn by reading; do not send them on an assignment to fill in missing numbers.

Write Markdown under src/content/studies/day-NNN-slug.md with the same frontmatter schema as existing cases. Rotate geography, sector, business model, profitability and market situations. Avoid company repetition.

## Every article should include
1. A vivid introductory explanation of who pays the company, for what, and why the model works.
2. A small, fully filled-in financial table with **actual figures, currency, reporting period and a direct official filing link**.
3. A **worked** income statement explanation—calculations and interpretation included, not merely a formula.
4. A **worked** balance sheet explanation—cash, assets, debt, working capital, capital intensity or unusual liabilities, as appropriate.
5. A **worked** cash flow explanation—operating cash, CapEx, free cash flow definitions and important non-recurring items.
6. A concise, intuitive example connecting all three statements, already resolved for the reader.
7. What changed, the risks and **one-sentence takeaway**.

## Do not write
- "Find these figures", "Your task", "Calculate", "Predict", checklists or tables of question marks.
- Speculative claims about share-price movement without price/date/source verification.
- Made-up filings, accounting figures or unsupported simplified financial advice.
- Unlabelled mixing of FY, quarterly, TTM or balance-sheet reporting periods.

## Verify carefully
Use company investor-relations websites, exchanges or regulator filings. Recheck dates and units, note management-defined adjusted measures, and separate accounting earnings from actual cash and market capitalisation. State where interpretation is uncertain. Put direct official source links in articles.

Target a clear **8–12 minute read** (roughly 600–1,000 words; vary naturally by complexity), with calm editorial style, accessible language and no forced exercises. Financial tables should be scannable, not an information dump.

To publish: validate frontmatter and run npm run build where possible, propose changes in a branch, and verify the commit exists. Do not claim a scheduled ChatGPT message automatically published a blog post.
