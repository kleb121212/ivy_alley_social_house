// Sample CSV data embedded
const menuData = [
  {Name:"Elote Dip (Vgt, GF*)", Description:"Oven roasted street corn topped with fresh jalapenos, cilantro & lime, served with tortilla chips.", Price:"10 | $6", Category:"Appetizers"},
  {Name:"Beer Cheese (Vgt)", Description:"Homemade beer cheese dip, served with toasted pita & tortilla chips.", Price:"10 | $6", Category:"Appetizers"},
  {Name:"Spinach Artichoke Dip (Vgt)", Description:"Homemade dip with roasted red peppers & garlic, served with toasted pita & tortilla chips.", Price:"12 | $7", Category:"Appetizers"},
  {Name:"Jerk Shrimp Skewers", Description:"Eight seared shrimp coated in honey & Jamaican Jerk seasoning, served with charred onion aioli", Price:"12", Category:"Appetizers"},
  {Name:"Pretzel Charcuterie", Description:"2 Soft, jumbo pretzels and charcuterie accoutrement served with Social House spicy mustard & homemade beer cheese (vegan available).", Price:"17", Category:"Appetizers"},
  {Name:"Garlic Knots", Description:"Our homemade pizza dough, served with choice of pizza sauce or ranch", Price:"10", Category:"Appetizers"},
  {Name:"French Onion Alley Fries", Description:"Sidewinder fries with cheese curds, brown gravy & fresh herbs, and carmelized onions", Price:"14", Category:"Appetizers"},
  {Name:"Garden Platter (V, GF*)", Description:"Two flavors of hummus, garlic & roasted red pepper, served with fresh cut veg, toasted pita, & tortilla chips", Price:"12", Category:"Appetizers"},
  {Name:"**Wifey’s Caesar", Description:"Romaine with parmesan, croutons & homemade Caesar. Add grilled chicken (+$4) or shrimp (+$4)", Price:"12", Category:"Soup & Salad"},
  {Name:"Classic Greek (Vgt, GF*)", Description:"All veg, no filler! Cucumber, cherry tomato, red onion, bell pepper, olives & feta cheese in our Social House vinaigrette.", Price:"12", Category:"Soup & Salad"},
  {Name:"Blackened Chicken Cobb (GF*)", Description:"Romaine with blackened chicken, bacon, blue cheese, cucumber, cherry tomato, green onion, avocado, hard-boiled egg & choice of ranch or Social House vinaigrette.", Price:"14", Category:"Soup & Salad"},
  {Name:"Soup Du Jour", Description:"Always changing, always delicious. Ask your server for today's selection!", Price:"5 (Cup) $8 (Bowl)", Category:"Soup & Salad"},
  {Name:"Potato Leep Soup (GF*)", Description:"Rustic & creamy, topped with cheddar and bacon", Price:"5 (Cup) $8 (Bowl)", Category:"Soup & Salad"},
  {Name:"The Philly", Description:"Shaved ribeye with charred onion aioli, carmelized onion, roasted peppers, portobello mushrooms & choice of provolone or homemade cheese sauce", Price:"15", Category:"Sandwiches"},
  {Name:"The Porto Philly (V)", Description:"Vegan cheesesteak with portobello & oyster mushrooms, caramelized onion, roasted peppers, and homemade vegan cheese sauce", Price:"16", Category:"Sandwiches"},
  {Name:"Island Porker", Description:"Hickory-Smoked pulled pork with pineapple jalapeno relish & choice of honey or habanero barbecue sauce.", Price:"15", Category:"Sandwiches"},
  {Name:"Burnt & Blue", Description:"Brisket burnt ends with charred onion aioli, coleslaw, blue cheese crumble and arrugula.", Price:"16", Category:"Sandwiches"},
  {Name:"Salmon Salad Sandwich", Description:"Smoked Salmon salad on a croissant with romaine, red onion, tomato, & avocado... Move over, tuna salad!", Price:"14", Category:"Sandwiches"},
  {Name:"Dogs in the Wind (Go Cubs!)", Description:"Two all-beef hot dogs with Social House spicy mustard, white onion, relish, tomato, pickle, and gardiniera. The ketchup is removed from the table.", Price:"12", Category:"Sandwiches"},
  {Name:"Soft Pretzel", Description:"", Price:"5", Category:"Sides"},
  {Name:"French Fries", Description:"", Price:"5", Category:"Sides"},
  {Name:"Cole Slaw", Description:"", Price:"5", Category:"Sides"},
  {Name:"Mac & Cheese", Description:"", Price:"6", Category:"Sides"},
  {Name:"Garlic Knots", Description:"", Price:"7", Category:"Sides"},
  {Name:"Chips", Description:"", Price:"5", Category:"Sides"},
  {Name:"Side Salad (Garden or Caesar", Description:"", Price:"5", Category:"Sides"},
  {Name:"Classic Margherita (Vgt)", Description:"Tomato sauce & fresh mozzarella, finished with fresh basil", Price:"8 (8 inch) | $12 (12 inch)", Category:"House Pizzas"},
  {Name:"Over the Garden Wall (Vgt)", Description:"Olive oil & Goat cheese base, house cheese blend, caramelized onion, portobello & oyster mushrooms", Price:"10 | $16", Category:"House Pizzas"},
  {Name:"Spinach & Artichoke (Vgt)", Description:"Spinach artichoke dip base, garlic, house cheese blend, garlic confit parmesan, fresh spinach, artichoke hearts.", Price:"12 | $18", Category:"House Pizzas"},
  {Name:"Pierogi Pizza (Trust Us, It's Delicious)", Description:"Seasoned mashed potato base, house cheese blend, caramelized onions & bacon.", Price:"11 | $17", Category:"House Pizzas"},
  {Name:"CBR", Description:"The classic midwest staple. ranch base, house cheese blend, chicken breast & bacon", Price:"10 | $16", Category:"House Pizzas"},
  {Name:"Hoggers & Poggers", Description:"Fig jam ricotta base, house cheese blend, bacon, sausage, finished with fresh spinach, arrugula, prosciutto & choice of honey bbq or habanero bbq drizzle.", Price:"12 | $18", Category:"House Pizzas"},  
  {Name:"The Flapper", Description:"Onion and garlic ricotta base, aged balsamic, house cheese blend, fresh mozzarella & spicy sausage, finished with arrugula", Price:"11 | $17", Category:"House Pizzas"},
  {Name:"Brewer’s Choice", Description:"Choice of honey or habanero bbq base, house cheese blend, chicken breast, red onion & fresh jalapenos", Price:"12 | $18", Category:"House Pizzas"},
  {Name:"Feel the Heat", Description:"Tomato sauce, house cheese blend, pepperoni, capicola, spicy sausage, giardiniera & garlic confit, finish with hot honey", Price:"12 | $18", Category:"House Pizzas"},
  {Name:"The Cove", Description:"Pesto base, house cheese blend, parmesan, shrimp, roasted red pepper & garlic confit, finished with fresh basil and aged balsamic", Price:"14 | $18", Category:"House Pizzas"},
  {Name:"Kid", Description:"Base Price listed, +$2 for each topping added", Price:"8", Category:"Build your Own Pizzas"},
  {Name:"Regular", Description:"Base Price listed, +$2 for each topping added", Price:"12", Category:"Build your Own Pizzas"},
  {Name:"Toppings - Meats", Description:"Pepperoni, Sweet Sausage, Spicy Sausage, Bacon, Chicken Breast (+$2), Shaved Ribeye, Salami, Capicola (+$2), Prosciutto (+$2), Pulled Pork, Shrimp, Anchovy", Price:"2 each", Category:"Build your Own Pizzas"},
  {Name:"Toppings - Cheeses (first free)", Description:"House Blend, Fresh Mozzarella, Shaved Parmesan (+$2), Feta, Goat Cheese, Smoked Gouda, Vegan Mozzarella", Price:"2 each", Category:"Build your Own Pizzas"},
  {Name:"Toppings - Fruit & Veg", Description:"Carmelized Onion, Red Onion, Raw Bell Pepper, Banana Pepper, Fresh Jalapeno, Poblano, Roasted Red Pepper, Portabello, Oyster Mushroom, Black Olives, Spinach, Artichoke Heart, Giardiniera, Pineapple, Garlic Confit", Price:"2 each", Category:"Build your Own Pizzas"},
  {Name:"Finishes", Description:"Olive Oil (Free), Hot Honey, Fresh Basil, Oregano, Arugula, Honey BBQ, Habanero BBQ, Aged Balsamic (+$2), Beer Cheese (+$2)", Price:"2 each", Category:"Build your Own Pizzas"},
  {Name:"Sauce (no charge)", Description:"Classic Tomato, Pesto, Ranch, Honey BBQ, Habanero BBQ, Onion & Garlic Ricotta, Aged Balsamic, Olive Oil, Olive Oil and Goat Cheese", Price:"0", Category:"Build your Own Pizzas"},
  {Name:"Mac & Cheese", Description:"It’s like the store stuff, just homemade.", Price:"7", Category:"Kid's Menu"},
  {Name:"Hot Dog", Description:"Plain Hot Dog with Fries, Chips, or Carrots", Price:"6", Category:"Kid's Menu"},
  {Name:"Chicken Tenders", Description:"Three oven-roasted chicken tenders, served with choice of dipping sauce & either fries, potato chips, or carrots", Price:"6", Category:"Kid's Menu"},
  {Name:"Pepsi Products", Description:"", Price:"3.5", Category:"Beverages"},
  {Name:"Milk", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Chocolate Milk", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Orange Juice", Description:"", Price:"3", Category:"Beverages"},
  {Name:"Apple Juice", Description:"", Price:"3", Category:"Beverages"},
  {Name:"Iced Tea", Description:"", Price:"3", Category:"Beverages"}
  // add more items...
];

const container = document.getElementById('food-menu-container');
const nav = document.getElementById('food-menu-nav');

// Get unique categories
const categories = [...new Set(menuData.map(item => item.Category))];

// Create buttons
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.className = 'px-4 py-2 bg-ivy text-ecru rounded hover:bg-rust transition font-semibold';
  btn.addEventListener('click', () => showCategory(cat));
  nav.appendChild(btn);
});

// Hide all initially
container.innerHTML = `<p class="text-center text-lg text-dark/70">Please select a category above.</p>`;

function showCategory(category) {
  // Clear previous
  container.innerHTML = '';

  // Filter items by category
  const items = menuData.filter(item => item.Category === category);

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'flex flex-col sm:flex-row items-center gap-4 bg-ecru/90 p-4 rounded-xl shadow-md';
    
    if(item.Image) {
      const img = document.createElement('img');
      img.src = item.Image;
      img.alt = item.Name;
      img.className = 'w-32 h-32 object-cover rounded-lg';
      div.appendChild(img);
    }

    const info = document.createElement('div');
    info.className = 'flex flex-col gap-1';
    info.innerHTML = `
      <h3 class="text-xl font-semibold text-ivy">${item.Name} - $${item.Price}</h3>
      <p class="text-dark">${item.Description}</p>
    `;
    div.appendChild(info);
    container.appendChild(div);
  });
}
