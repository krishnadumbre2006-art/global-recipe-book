# 🤝 Contributing to Global Recipe Book

Thank you for your interest in contributing! 🎉  
This project is designed to be **beginner-friendly** and to help you practice **Git/GitHub, Markdown, and web development**.  

---

## 🚀 How to Contribute

1. 🍴 **Fork** this repo  
2. 🌿 **Clone** your fork locally  
   ```bash
   git clone https://github.com/<your-username>/global-recipe-book.git
   cd global-recipe-book
   ```
3. ✍️ **Add your recipe** in `/recipes/<country>/` (Portable Document Format)  
   OR  
   🎨 **Convert a recipe** from `/recipes/<country>` into `/site/` (HTML page)  
4. ✅ **Commit** your changes  
   ```bash
   git add .
   git commit -m "Added <recipe_name> recipe"
   ```
5. 📤 **Push** to your fork  
   ```bash
   git push origin main
   ```
6. 🔁 Open a **Pull Request** on this repo

---

## 📌 Contribution Options

You can contribute in different ways:

1. For Non-coders
   **Add a new recipe (Markdown)**  
   - Create a file in `recipes/<country>/<recipe_name.pdf>`  
   - Follow the [recipe template](README.md#-recipe-template-markdown)  
   **Add recipe images**  
   - Place them inside `assets/<country>/recipe_name.jpg`  
   - Update the recipe page to display them  

2. For Coders
   **Convert a recipe to HTML**  
   - Find recipes in `/recipes/recipe_name.txt`  
   - Create a matching `recipe_name.html` file inside `/site/<country>/`  
   - Use semantic HTML and link back to `index.html`  

---

## 🧾 Rules

- Only 1 recipe/page per PR.  
- Use **Portable Document Format (.pdf)** for recipes and **HTML (.html)** for pages.  
- Filenames must be lowercase with underscores (`masala_dosa.pdf`).  
- Always link back to `index.html` from recipe pages.  
- Be respectful and inclusive.  

---

## 🏆 Recognition

Your name will be added to the **Contributors section** in the README after your PR is merged! 🎉

### 🔍 Linting (Don’t Worry Too Much)
Our repo uses automatic "linters" to check Markdown, HTML, CSS, and JS.  
Think of it like a spellchecker for code.  
If your Pull Request shows warnings, don’t panic! Just read the message and fix it.  
(If you’re stuck, ask me in the PR comments and I’ll help you)
