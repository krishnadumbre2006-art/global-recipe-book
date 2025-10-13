// Pagination + search
const PAGE_SIZE = 8;
let allItems = [];
let filteredItems = [];
let currentPage = 1;

function collectAllItems() {
  const list = document.getElementById("recipeList");
  const liNodes = list ? list.getElementsByTagName("li") : [];
  allItems = Array.from(liNodes);
}

function renderList() {
  const list = document.getElementById("recipeList");
  if (!list) return;
  const ul = list.querySelector("ul");
  if (!ul) return;

  // Step 1: Render all items to measure overflow
  ul.innerHTML = "";
  filteredItems.forEach((li) => ul.appendChild(li));

  const paginationContainer = document.getElementById("pagination");
  const pageMightOverflow = document.documentElement.scrollHeight > window.innerHeight;
  const shouldPaginate = pageMightOverflow && filteredItems.length > PAGE_SIZE;

  if (!shouldPaginate) {
    // No pagination needed; hide controls
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.style.display = "none";
    }
    return;
  }

  // Step 2: Apply pagination and show controls
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageItems = filteredItems.slice(startIndex, endIndex);

  ul.innerHTML = "";
  pageItems.forEach((li) => ul.appendChild(li));

  if (paginationContainer) paginationContainer.style.display = "flex";
  renderPaginationControls();
}

function renderPaginationControls() {
  const container = document.getElementById("pagination");
  if (!container) return;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);

  container.innerHTML = "";

  // Helper to create a button
  const createBtn = (label, page, disabled = false, selected = false) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.type = "button";
    if (disabled) btn.disabled = true;
    if (selected) btn.setAttribute("aria-current", "page");
    btn.addEventListener("click", () => {
      if (page === currentPage) return;
      currentPage = page;
      renderList();
      // move focus to container for accessibility after page change
      container.focus({ preventScroll: true });
    });
    return btn;
  };

  // Previous
  container.appendChild(createBtn("Prev", Math.max(1, currentPage - 1), currentPage === 1));

  // Page numbers (simple window)
  const totalPagesToShow = 5;
  let start = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
  let end = Math.min(totalPages, start + totalPagesToShow - 1);
  start = Math.max(1, Math.min(start, Math.max(1, end - totalPagesToShow + 1)));

  for (let p = start; p <= end; p++) {
    container.appendChild(createBtn(String(p), p, false, p === currentPage));
  }

  // Next
  container.appendChild(createBtn("Next", Math.min(totalPages, currentPage + 1), currentPage === totalPages));

  // If no results
  if (filteredItems.length === 0) {
    const msg = document.createElement("span");
    msg.className = "pagination-empty";
    msg.textContent = "No recipes found";
    container.appendChild(msg);
  }

  // Ensure focusable for programmatic focus
  container.setAttribute("tabindex", "-1");
}

function searchRecipes() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  filteredItems = allItems.filter((li) => li.innerText.toLowerCase().includes(input));
  currentPage = 1;
  renderList();
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  collectAllItems();
  filteredItems = [...allItems];
  renderList();
  // Re-evaluate on resize since viewport height changes
  window.addEventListener("resize", () => {
    // Keep currentPage but re-check if pagination is needed
    renderList();
  });
});

// TODO: Contributors can add more features here
// - Filter by country
// - Sort recipes alphabetically
// - Highlight search terms
