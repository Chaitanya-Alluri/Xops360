# Schema Validation Guide for Xops360

## Quick Start - Test Right Now

### Google Rich Results Test

1. Go to: **https://search.google.com/test/rich-results**
2. Click the **"CODE"** tab (top of page)
3. View your page source in browser (Ctrl+U or Cmd+U)
4. Select all (Ctrl+A) and copy (Ctrl+C)
5. Paste into the text area
6. Click **"TEST CODE"**

**You should see:**
- FAQPage - 5 FAQ items detected
- BreadcrumbList - Navigation path detected
- SoftwareApplication - App with 4.8 rating
- Product - Product with reviews

### Schema.org Validator

1. Go to: **https://validator.schema.org/**
2. Click **"CODE SNIPPET"** tab
3. View your page source (Ctrl+U)
4. Copy all HTML and paste into text area
5. Click **"RUN TEST"**

**You should see:**
- 7 structured data items detected
- Organization, WebSite, SoftwareApplication, Product, BreadcrumbList, FAQPage, WebPage

---

## Schemas Included

| Schema Type | Purpose | Rich Result |
|-------------|---------|-------------|
| Organization | Company info, logo, contacts | Knowledge panel |
| WebSite | Site search action | Sitelinks search box |
| SoftwareApplication | App with ratings | App info card |
| Product | Pricing, reviews | Product snippets |
| BreadcrumbList | Navigation path | Breadcrumb trail |
| FAQPage | 5 Q&A items | FAQ accordion |
| WebPage | Page context | Enhanced snippets |

---

## Important Notes

**URL vs Code Testing:**
- "Fetch URL" only works for publicly deployed sites
- "Code/Code Snippet" works for local testing - use this method
- Copy the ENTIRE HTML document including `<!doctype html>`

**What Google Shows:**
- Google only displays rich results for certain schema types
- FAQPage, BreadcrumbList, Product with reviews are most likely to show
- Organization and WebSite help with brand recognition but may not show visual rich results

**Timing:**
- After deploying to production, it can take 3-14 days for Google to show rich results
- Use Google Search Console to monitor indexing status

---

## Troubleshooting

**"No structured data detected":**
- Make sure you clicked "CODE" tab, not trying to fetch a URL
- Ensure you copied the FULL HTML document
- Check that nothing was cut off when pasting

**"Errors" shown:**
- Some warnings are okay - focus on critical errors
- Missing optional properties generate warnings, not errors
- The current schema follows Google's guidelines

**Rich results not showing in search:**
- Page must be indexed first (submit via Search Console)
- Google decides algorithmically which results get rich snippets
- Not all pages qualify even with valid schema

---

## Schema Details

### FAQPage (5 Questions)
1. How much can I save with Xops360?
2. Which cloud platforms does Xops360 support?
3. How does Xops360 ensure compliance?
4. What security features does Xops360 offer?
5. What is SCA and how does Xops360 scan my dependencies?

### Product/SoftwareApplication
- Rating: 4.8/5 stars (127 reviews)
- Price: $0-$999 USD (3 tiers)
- Category: Business Application

> Note: `aggregateRating` must be backed by genuine, verifiable reviews.
> Google treats unsubstantiated review markup as a structured-data policy
> violation, so keep the source of these figures documented.

### Organization
- Name: Xops360 (brand: AxiomIO)
- Contact: hello@xops360.ai · +1-323-499-3203 (areaServed: US)
- Social: LinkedIn, Twitter

---

## Validation Checklist

- [ ] Google Rich Results Test passes with "CODE" tab
- [ ] Schema.org validator detects all 7 types
- [ ] No critical errors (warnings are okay)
- [ ] FAQPage shows 5 questions
- [ ] Product/App shows ratings

---

## Resources

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Google Search Console: https://search.google.com/search-console
- Schema.org Documentation: https://schema.org/
