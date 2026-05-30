# ToolNest Feature Backlog

## Document Purpose

This backlog tracks planned tools and platform improvements for ToolNest. Items are grouped by priority. Move completed work to [development-log.md](./development-log.md) and update [tool-roadmap.md](./tool-roadmap.md) when shipping.

---

## Completed (Reference)

| Tool | Route | Shipped |
|------|-------|---------|
| Word Counter | `/tools/word-counter` | Yes |
| Text Compare | `/tools/text-compare` | Yes |
| Remove Duplicate Lines | `/tools/remove-duplicate-lines` | Yes |
| Remove Empty Lines | `/tools/remove-empty-lines` | Yes |
| Case Converter | `/tools/case-converter` | Yes |
| Character Counter | `/tools/character-counter` | Yes |

---

## High Priority

Tools with strong search demand, clear frontend-only implementation, and fit for the current writing/developer audience.

| Tool | Suggested route | Description | Notes |
|------|-----------------|-------------|-------|
| JSON Formatter | `/tools/json-formatter` | Format, minify, validate JSON | Developer audience; error UX important |
| Password Generator | `/tools/password-generator` | Length, charset options, copy | High search volume; security copy needed |
| URL Encoder / Decoder | `/tools/url-encoder` | Encode/decode query strings and URLs | Pair with developer tools |
| Base64 Encoder / Decoder | `/tools/base64-encoder` | Encode/decode text and files (text-only first) | Common utility search intent |

### High-priority platform tasks

| Task | Description |
|------|-------------|
| SEO sections on all tools | Replicate Word Counter guide + FAQ pattern |
| Tool page templates | Standardize stats + copy/clear actions |
| Algorithm tests | Vitest for `lib/*` processors |

---

## Medium Priority

Valuable additions after high-priority tools; moderate complexity or narrower audience.

| Tool / feature | Suggested route | Description |
|----------------|---------------|-------------|
| Markdown Preview | `/tools/markdown-preview` | Live Markdown render |
| HTML Entity Encoder | `/tools/html-encoder` | Encode/decode HTML entities |
| Regex Tester | `/tools/regex-tester` | Pattern test with match highlights |
| Lorem Ipsum Generator | `/tools/lorem-ipsum` | Paragraph/word placeholder text |
| Readability Score | `/tools/readability` | Simple readability metrics |
| Trim Whitespace Tool | `/tools/trim-lines` | Trim leading/trailing spaces per line |
| Sort Lines | `/tools/sort-lines` | Alphabetical sort, optional case sensitivity |
| Custom Open Graph images | — | Branded share previews per tool |
| Privacy-friendly analytics | — | e.g. Plausible for traffic insights |

---

## Future Ideas

Exploratory items — validate demand before building.

| Idea | Notes |
|------|-------|
| User accounts & saved history | Requires backend or BaaS |
| Multi-language UI (i18n) | `next-intl` or similar |
| Browser extension | Quick access to favorite tools |
| Batch file processing | Upload TXT/CSV for line ops |
| AI writing assist | External API, cost & privacy review |
| Team / shared workspaces | High complexity |
| API for word count | Server endpoints + rate limits |
| Word Counter CJK mode | Count characters vs. words for Chinese/Japanese |
| Compare more than two texts | Text Compare v2 |
| Export results (PDF / TXT) | Download button on tool outputs |
| Tool categories page | `/tools` index with filters |
| Dark mode | Design system extension |
| Tool embedding widget | iframe or script for third-party sites |

---

## Backlog Workflow

When picking up an item:

1. Confirm route slug and SEO title in [feature-backlog.md](./feature-backlog.md)
2. Implement using [code-rules.md](./code-rules.md) checklist
3. Register in `lib/tools.ts`, `lib/seo.ts`, `app/sitemap.ts`
4. Update [tool-roadmap.md](./tool-roadmap.md), [development-log.md](./development-log.md), [seo-progress.md](./seo-progress.md)
5. Deploy to Vercel and verify sitemap + GSC

---

## Priority Labels

| Label | Meaning |
|-------|---------|
| High | Next releases — search demand + fits architecture |
| Medium | This quarter if capacity allows |
| Future | Backlog / needs validation |

---

## Related Documents

- [Tool Roadmap](./tool-roadmap.md)
- [Development Log](./development-log.md)
- [Project Overview](./project-overview.md)
- [SEO Progress](./seo-progress.md)

*Last updated: May 2026*
