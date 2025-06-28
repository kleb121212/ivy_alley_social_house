fetch('data/menu.csv')
  .then(res => res.text())
  .then(csv => {
    const parsed = Papa.parse(csv, { header: true }).data;
    const container = document.getElementById('food-menu-container');
    const nav = document.getElementById('food-menu-nav');
    if (!container || !nav) {
      console.error('Missing #food-menu-container or #food-menu-nav');
      return;
    }

    // Group by category
    const categoryMap = {};
    parsed.forEach(item => {
      if (!item.Name || !item.Category) return;
      if (!categoryMap[item.Category]) categoryMap[item.Category] = [];
      categoryMap[item.Category].push(item);
    });

    const sortedCategories = Object.keys(categoryMap).sort();


    // Create category nav
    const navList = document.createElement('ul');
    navList.className = "flex flex-wrap gap-4";

    const orderLink = document.createElement('a');
    orderLink.href = 'order.html';
    orderLink.textContent = 'Order Now!';
    orderLink.className = "font-bold text-blue-700 hover:underline";

    const orderLi = document.createElement('li');
    orderLi.appendChild(orderLink);
    navList.appendChild(orderLi);

    sortedCategories.forEach(category => {
      const slug = category.toLowerCase().replace(/\s+/g, '-');
      const link = document.createElement('a');
      link.href = `#${slug}`;
      link.textContent = category;
      link.className = "text-blue-600 hover:underline";

      const li = document.createElement('li');
      li.appendChild(link);
      navList.appendChild(li);
    });

    nav.appendChild(navList);

    // Render category sections
    sortedCategories.forEach(category => {
      const slug = category.toLowerCase().replace(/\s+/g, '-');

      const section = document.createElement('section');
      section.id = slug;
      section.className = "mb-12 w-full";

      const heading = document.createElement('h2');
      heading.textContent = category;
      heading.className = "text-2xl font-bold mb-4 border-b pb-2";
      section.appendChild(heading);

      const stack = document.createElement('div');
      stack.className = "flex flex-col gap-6";

      categoryMap[category].forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded shadow w-full";

        if (item.Image) {
          const img = document.createElement('img');
          img.src = `assets/images/${item.Image}`;
          img.alt = item.Name;
          img.className = "mb-2 w-full h-40 object-cover rounded";
          card.appendChild(img);
        }

        const title = document.createElement('h3');
        title.textContent = item.Name;
        title.className = "text-xl font-semibold";
        card.appendChild(title);

        if (item.Description) {
          const desc = document.createElement('p');
          desc.textContent = item.Description;
          desc.className = "text-sm text-gray-700";
          card.appendChild(desc);
        }

        if (item.Price) {
          const price = document.createElement('p');
          price.textContent = `$${item.Price}`;
          price.className = "text-sm font-bold mt-2";
          card.appendChild(price);
        }

        stack.appendChild(card);
      });

      section.appendChild(stack);
      container.appendChild(section);
    });
  });
