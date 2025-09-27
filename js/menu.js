// js/menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("food-menu-container");
  const menuNav = document.getElementById("food-menu-nav");

  // === Embedded menu data ===
  const items = [
    { Name: "Margherita Pizza", Description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.", Price: "12.99", Image: "assets/margherita.jpg", Category: "Pizza" },
    { Name: "Pepperoni Pizza", Description: "Loaded with pepperoni and mozzarella cheese.", Price: "13.99", Image: "assets/pepperoni.jpg", Category: "Pizza" },
    { Name: "Caesar Salad", Description: "Crisp romaine lettuce with Caesar dressing and croutons.", Price: "9.99", Image: "", Category: "Salads" },
    { Name: "Buffalo Wings", Description: "Spicy chicken wings served with blue cheese dip.", Price: "11.99", Image: "assets/wings.jpg", Category: "Appetizers" },
    { Name: "Chocolate Cake", Description: "Rich chocolate cake with ganache.", Price: "6.99", Image: "", Category: "Desserts" },
    // Add all your menu items here
  ];

  // === Generate category buttons ===
  const categories = [...new Set(items.map(item => item.Category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "px-4 py-2 bg-ivy text-ecru rounded shadow hover:bg-rust hover:text-ecru transition font-semibold";
    btn.addEventListener("click", () => {
      showCategory(cat);
    });
    menuNav.appendChild(btn);
  });

  // Show the first category by default
  showCategory(categories[0]);

  function showCategory(category) {
    menuContainer.innerHTML = "";
    items
      .filter(item => item.Category === category)
      .forEach(item => {
        const card = document.createElement("div");
        card.className = "flex flex-col sm:flex-row items-center bg-ecru/90 rounded-2xl shadow-lg p-6 border-l-4 border-gold";

        // Image
        if (item.Image && item.Image.trim() !== "") {
          const img = document.createElement("img");
          img.src = item.Image;
          img.alt = item.Name;
          img.className = "h-24 w-24 sm:h-32 sm:w-32 rounded-lg mr-6 mb-4 sm:mb-0 object-cover";
          card.appendChild(img);
        }

        // Info
        const info = document.createElement("div");
        info.className = "flex flex-col";

        const name = document.createElement("h3");
        name.textContent = item.Name;
        name.className = "text-xl sm:text-2xl font-bold text-ivy mb-2";
        info.appendChild(name);

        const desc = document.createElement("p");
        desc.textContent = item.Description;
        desc.className = "text-slate mb-2";
        info.appendChild(desc);

        const price = document.createElement("span");
        price.textContent = `$${item.Price}`;
        price.className = "text-rust font-semibold";
        info.appendChild(price);

        card.appendChild(info);
        menuContainer.appendChild(card);
      });
  }
});
