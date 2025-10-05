---
name: "Convert Recipe to HTML"
about: "Convert an existing recipe PDF to a semantic HTML page for the website"
title: "[Convert] "
labels: "good first issue, help wanted"
assignees: ""
---

## 📌 Recipe Details

- **Recipe PDF to Convert:** `recipes/<country>/<recipe_name>.pdf`
- **Country / Cuisine:** 
- **Short Description (for HTML page):** 

## 🖥️ HTML Page Details

- File to create: `site/<country>/<recipe_name>.html`
- Include:
  - Semantic HTML tags (h1, h2, p, ul/ol for ingredients/steps)
  - Link back to `index.html`
  - Image(s) from `assets/<country>/<recipe_name>.jpg` if available
  - If image(s) not available add them
  - Make pages as you see fit. Include all data mentioned in pdfs

## 🔧 Checklist

- [ ] HTML page created in correct folder
- [ ] PDF filename matches HTML filename
- [ ] Semantic HTML used
- [ ] Linked back to `index.html`
- [ ] Images correctly embedded (if any)

---

### 🙏 Notes for Contributors
- Only 1 HTML page per PR
- Ensure the page works locally before submitting
- If unsure about formatting, check existing sample HTML pages
