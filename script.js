// Search + Filter
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const pdfList = document.getElementById("pdfList");
const listItems = pdfList.getElementsByTagName("li");

searchInput.addEventListener("input", filterList);
categoryFilter.addEventListener("change", filterList);

function filterList() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  for (let item of listItems) {
    const text = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchText = text.includes(searchText);
    const matchCategory = category === "all" || category === itemCategory;

    item.style.display = matchText && matchCategory ? "list-item" : "none";
  }
}

// Dark mode toggle
const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleButton.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
