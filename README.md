# 🌍 Global Recipe Book Website

Welcome to the **Global Recipe Book**! 🎉  
This is a **beginner-friendly Hacktoberfest project** where anyone can contribute by adding recipes from their culture, family, or experiments in the kitchen.

The twist?  
👉 Recipes first live in **Portable Document Format (.pdf)** (`/recipes/`) and then contributors help turn them into **web pages** (`/site/`) using HTML, CSS, and JS.  

This way, you can practice:
- Git & GitHub basics (forking, branching, PRs)
- HTML, CSS, and JavaScript
- Open source collaboration

---

## 📂 Project Structure

```
global-recipe-book/
│
├── index.html                  # Homepage listing all recipes
├── style.css                   # Global styles
├── script.js                   # Search/filter logic (optional at start)
│
├── recipes/                    # Raw contributions in Portable Document Format
│   ├── india/masala_dosa.pdf
│   └── italy/pasta_carbonara.pdf
│
├── site/                       # Converted HTML recipe pages
│   ├── india/masala_dosa.html
│   └── italy/pasta_carbonara.html
│
├── assets/                     # Images & media
│   ├── india/masala_dosa.jpg
│   └── italy/pasta_carbonara.jpg
│
└── .github/                    # Issue templates & workflows
```

---

## 🧾 Recipe Template (Markdown)

When adding a new recipe in `/recipes/`, please follow this template:

```markdown
# Recipe Name

## 🍽️ Cuisine
Country / Region
History and origin of the recipie in short. 
Short para on how the recipe has changed over the course of time(if it has changed)

## ⏱️ Time Required
- Preparation: XX min
- Cooking: XX min

## 🥗 Ingredients
- 2 cups ...
- 1 tsp ...
- ...

## 🍳 Instructions
1. Step one
2. Step two
3. Step three

## 📸 Image 
![Dish photo](../../assets/country/recipe_name.jpg)
iamges from the web and add them to the above directory as recipe name in jpg format only
```

---

## 🚀 How to Contribute

1. 🍴 **Fork** this repo  
2. 🌿 **Clone** your fork locally  
   ```bash
   git clone https://github.com/<your-username>/global-recipe-book.git
   cd global-recipe-book
   ```
3. 🔀 **Create a new branch**  
   ```bash
   git checkout -b name_surname
   ```
4. ✍️ **Add your recipe** in `/recipes/<country>/` (Portable Document Format)  
   OR  
   🎨 **Convert a recipe** from `/recipes/<country>` into `/site/` (HTML page)  
5. ✅ **Commit** your changes  
   ```bash
   git add .
   git commit -m "Added Masala Dosa recipe"
   ```
6. 📤 **Push** to your fork  
   ```bash
   git push origin name_surname
   ```
7. 🔁 Open a **Pull Request** on this repo

---

## 📝 Types of Contributions

- 🥘 Add a new recipe in Markdown  
- 🍕 Convert a Portable Document Format recipe to an HTML page  
- 🖼️ Add images for recipes  

---

## 🌐 Live Website

Once deployed via GitHub Pages, you’ll find the live site here:  
👉 [https://<your-username>.github.io/global-recipe-book/](https://<your-username>.github.io/global-recipe-book/)

---

## 🏆 Contributors

Thanks to all the amazing people who contribute!  
(Your name will appear here automatically with your PR 🎉)
