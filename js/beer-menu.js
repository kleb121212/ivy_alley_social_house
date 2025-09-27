// js/beer-menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("drink-menu-container");
  const menuNav = document.getElementById("drink-menu-nav");

  // === Embedded drink data ===
  const drinks = [
    { Name: "IPA", Description: "Hoppy and bitter, 6.5% ABV.", Price: "7.00", Image: "assets/ipa.jpg", Category: "Beers" },
    { Name: "Lager", Description: "Smooth and crisp, 5% ABV.", Price: "6.50", Image: "", Category: "Beers" },
    { Name: "Stout", Description: "Dark, rich, and creamy, 6% ABV.", Price: "7.50", Image: "assets/stout.jpg", Category: "Beers" },
    { Name: "Red Wine", Description: "Full-bodied cabernet.", Price: "9.00", Image: "", Category: "Wines" },
    { Name: "White Wine", Description: "Crisp and refreshing chardonnay.", Price: "8.50", Image: "", Category: "Wines" },
    { Name: "Cocktail: Old Fashioned", Description: "Classic bourbon cocktail with bitters.", Price: "10.00", Image: "", Category: "Cocktails" },
    // Add all other drinks here
  ];

  // === Generate category buttons ===
  const categories = [...new Set(drinks.map(drink => drink.Category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "px-4 py-2 bg-ivy text-ecru rounded shadow hover:bg-rust hover:text-ecru transition font-semibold";
    btn.addEventListener("click", () => {
      showCategory(cat);
    });
    menuNav.appendChild(btn);
  });

  // Show first category by default
  showCategory(categories[0]);

  function showCategory(category) {
    menuContainer.innerHTML = "";
    drinks
      .filter(drink => drink.Category === category)
      .forEach(drink => {
        const card = document.createElement("div");
        card.className = "flex flex-col sm:flex-row items-center bg-ecru/90 rounded-2xl shadow-lg p-6 border-l-4 border-gold";

        // Image
        if (drink.Image && drink.Image.trim() !== "") {
          const img = document.createElement("img");
          img.src = drink.Image;
          img.alt = drink.Name;
          img.className = "h-24 w-24 sm:h-32 sm:w-32 rounded-lg mr-6 mb-4 sm:mb-0 object-cover";
          card.appendChild(img);
        }

        // Info
        const info = document.createElement("div");
        info.className = "flex flex-col";

        const name = document.createElement("h3");
        name.textContent = drink.Name;
        name.className = "text-xl sm:text-2xl font-bold text-ivy mb-2";
        info.appendChild(name);

        const desc = document.createElement("p");
        desc.textContent = drink.Description;
        desc.className = "text-slate mb-2";
        info.appendChild(desc);

        const price = document.createElement("span");
        price.textContent = `$${drink.Price}`;
        price.className = "text-rust font-semibold";
        info.appendChild(price);

        card.appendChild(info);
        menuContainer.appendChild(card);
      });
  }
});
