// js/menu.js

document.addEventListener("DOMContentLoaded", function () {
  const menuData = [
    { Name: "Margherita Pizza", Description: "Classic tomato & mozzarella", Price: "$12", Image: "assets/pizza-margherita.jpg", Category: "Pizza" },
    { Name: "Pepperoni Pizza", Description: "Pepperoni & cheese", Price: "$14", Image: "assets/pizza-pepperoni.jpg", Category: "Pizza" },
    { Name: "Caesar Salad", Description: "Romaine, Caesar dressing, croutons", Price: "$10", Image: "", Category: "Salads" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "Appetizers" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "Noodles" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "Smoodles" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "Poatoes" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "Brunch" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "FUCK" },
    { Name: "Buffalo Wings", Description: "Spicy wings with ranch", Price: "$11", Image: "assets/wings.jpg", Category: "test" }
    // add more items here...
  ];

  // Get unique categories
  const categories = [...new Set(menuData.map(item => item.Category))];

  // Populate category buttons
  const menuNav = document.getElementById("food-menu-nav");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "px-4 py-2 bg-ivy text-ecru font-semibold rounded hover:bg-rust transition";
    btn.addEventListener("click", () => filterMenu(cat));
    menuNav.appendChild(btn);
  });

  const menuContainer = document.getElementById("food-menu-container");

  function renderMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "flex flex-col sm:flex-row items-center gap-6 p-4 bg-ecru/90 rounded-xl shadow-lg border-l-4 border-gold";

      // Image if exists
      if (item.Image) {
        const img = document.createElement("img");
        img.src = item.Image;
        img.alt = item.Name;
        img.className = "w-32 h-32 object-cover rounded-lg";
        div.appendChild(img);
      }

      const info = document.createElement("div");
      info.className = "flex-1 flex flex-col items-start";

      const name = document.createElement("h3");
      name.textContent = item.Name;
      name.className = "text-2xl font-bold text-dark mb-1";
      info.appendChild(name);

      const desc = document.createElement("p");
      desc.textContent = item.Description;
      desc.className = "text-dark/80 mb-2";
      info.appendChild(desc);

      const price = document.createElement("p");
      price.textContent = item.Price;
      price.className = "text-dark font-semibold mb-4";
      info.appendChild(price);

      // Order button
      const orderBtn = document.createElement("a");
      orderBtn.href = "about.html"; // placeholder
      orderBtn.textContent = "Order Here";
      orderBtn.className = "px-6 py-2 bg-rust text-ecru font-semibold rounded-lg shadow-md hover:bg-gold hover:text-dark transition";
      info.appendChild(orderBtn);

      div.appendChild(info);
      menuContainer.appendChild(div);
    });
  }

  function filterMenu(category) {
    const filtered = menuData.filter(item => item.Category === category);
    renderMenu(filtered);
  }

  // Show all items initially
  renderMenu(menuData);
});
