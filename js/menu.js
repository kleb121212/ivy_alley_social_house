// Sample CSV data embedded
const menuData = [
  {Name:"Street Corn Dip (Vgt)", Description:"Oven Roasted Street Corn Dip topped with Fresh Jalapenos & Cilantro served with Tortilla Chips.", Price:"10 | $6", Category:"Appetizers"},
  {Name:"Beer Cheese (Vgt)", Description:"Homemade Beer Cheese served with Toasted French Bread & Tortilla Chips.", Price:"10 | $6", Category:"Appetizers"},
  {Name:"Spinach Artichoke Dip (Vgt)", Description:"Homemade Spinach Artichoke Dip with Toasted French Bread & Tortilla Chips.", Price:"12 | $7", Category:"Appetizers"},
  {Name:"Dill Pickle Dip (Vgt)", Description:"Creamy Dill Pickle Dip served with Tortilla Chips & Naan Bread.", Price:"9  | $5", Category:"Appetizers"},
  {Name:"Pretzel Charcuterie (Vgt)", Description:"2 Soft, Jumbo Pretzels with accoutrements and Honey Mustard, Social House Mustard, & Beer Cheese.", Price:"14", Category:"Appetizers"},
  {Name:"Pizza Pinwheels", Description:"Pizza bites with red sauce, cheese blend, & sausage.", Price:"12", Category:"Appetizers"},
  {Name:"French Onion Alley Fries", Description:"Sidewinder Fries with Cheese Curds, Brown Gravy & Caramelized Onions sprinkled with Fresh Thyme.", Price:"14", Category:"Appetizers"},
  {Name:"Garden Platter (Vegan, GF*)", Description:"Fresh cut Carrots, Bell Peppers, Cucumbers, Cherry Tomatoes served with Garlic Hummus, Roasted Red Pepper Hummus, & Homemade Ranch.", Price:"12", Category:"Appetizers"},
  {Name:"Wifey’s Caesar (Vgt)", Description:"Romaine Lettuce with Homemade Caesar Dressing, Parmesan, & Croutons. Add Grilled Chicken ($3).", Price:"11", Category:"Soup & Salad"},
  {Name:"Greek Salad (Vgt)", Description:"Romaine & Arugula, Cucumber, Cherry Tomatoes, Black Olives, Bell Pepper, Red Onion, & Feta Cheese in a Greek Vinaigrette.", Price:"12", Category:"Soup & Salad"},
  {Name:"Chef Salad", Description:"Lettuce Blend with Cucumber, Bell Pepper, Feta, Cheddar, Chicken, Bacon, Croutons, & Homemade Ranch.", Price:"14", Category:"Soup & Salad"},
  {Name:"Soup Du Jour", Description:"Hmm… Sounds Delicious.", Price:"Cup $5 Bowl $8", Category:"Soup & Salad"},
  {Name:"Potato Bacon", Description:"A Cream of potato soup with chunks of potato, bacon, & veggies.", Price:"Cup $5 Bowl $8", Category:"Soup & Salad"},
  {Name:"The Philly Blackout", Description:"Cheesesteak with Charred onions, roasted poblano peppers, provolone, & black garlic aioli.", Price:"15", Category:"Sandwiches"},
  {Name:"Island Porker", Description:"Hickory-Smoke Pulled Pork with Pineapple Jalapeno Slaw & Habanero Barbecue Sauce.", Price:"15", Category:"Sandwiches"},
  {Name:"Burnt Ends Sando", Description:"Brisket Burnt Ends with Burnt Onion Aioli, Blue Cheese Crumble, & Arugula.", Price:"16", Category:"Sandwiches"},
  {Name:"Breaking Windy City", Description:"2x Chicago-ish Style Hotdogs with Spicy House Mustard, White Onion, Relish, Tomato, Pickle, Giardiniera, & Beer Cheese. The Ketchup is removed from the table.", Price:"12", Category:"Sandwiches"},
  {Name:"Hot Diggity Dogy", Description:"2x Hotdogs with chopped bacon, Spicy Sausage, Beer Cheese, Sauteed Bell Pepper & Onion, and Fig Jam.", Price:"12", Category:"Sandwiches"},
  {Name:"Soft Pretzel", Description:"", Price:"5", Category:"Sides"},
  {Name:"French Fries", Description:"", Price:"5", Category:"Sides"},
  {Name:"Cole Slaw", Description:"", Price:"5", Category:"Sides"},
  {Name:"Mac & Cheese", Description:"", Price:"6", Category:"Sides"},
  {Name:"Garlic Knots", Description:"", Price:"7", Category:"Sides"},
  {Name:"Chips", Description:"", Price:"5", Category:"Sides"},
  {Name:"Twice Baked Potatoes", Description:"", Price:"7", Category:"Sides"},
  {Name:"Homemade Sauces", Description:"Ranch | Spicy Ranch | Beer Cheese | Pizza Sauce Spicy Social House Mustard | Burnt Onion Aioli", Price:"0", Category:"Homemade Sauces"},
  {Name:"Classic Margherita", Description:"Tomato Sauce, Fresh Mozzarella, & Basil.", Price:"8 | $12", Category:"House Pizzas"},
  {Name:"Cheese & Garlic", Description:"Tomato Sauce, House Cheese Blend, Fresh Chopped Garlic.", Price:"8 | $12", Category:"House Pizzas"},
  {Name:"Why not’ta Burrata (Vgtn)", Description:"Tomato Sauce, House Cheese Blend, & a Large Burrata Ball with Basil & Oregano.", Price:"8 | $16", Category:"House Pizzas"},
  {Name:"Shroomzza (Vgtn)", Description:"Olive Oil & Goat Cheese Base, House Cheese Blend, Mushrooms, with Thyme & Oregano.", Price:"8 | $14", Category:"House Pizzas"},
  {Name:"Stuffed Poblano Pepper", Description:"Tomato Sauce, House Cheese Blend, Sliced Poblano Peppers Stuffed with Spicy Sausage.", Price:"10 | $16", Category:"House Pizzas"},
  {Name:"Spinach Artichoke Pizza", Description:"Spinach Artichoke Dip Base, Garlic, House Cheese Blend, Parmesan, Fresh Spinach, Artichoke Hearts.", Price:"12 | $18", Category:"House Pizzas"},
  {Name:"Pierogi Pizza (Trust Us, It's Weirdly Delicious)", Description:"Seasoned Mashed Potato Base, House Cheese Blend, Caramelized Onions & Bacon.", Price:"11 | $17", Category:"House Pizzas"},
  {Name:"CBR", Description:"Ranch Base, House Cheese Blend, Chicken Breast, Bacon.", Price:"10 | $16", Category:"House Pizzas"},
  {Name:"Hoggers & Poggers", Description:"Fig Jam Ricotta Base, House Cheese Blend, Bacon, & Sausage, topped with Spinach, Arugula, & Prosciutto. Habanero BBQ Drizzle.", Price:"14 | $18", Category:"House Pizzas"},
  {Name:"The Flapper", Description:"Aged Balsamic with Onion & Garlic Ricotta Base, House Cheese Blend, Fresh Mozzarella, Spicy Sausage & topped with Arugula.", Price:"11 | $17", Category:"House Pizzas"},
  {Name:"Brewer’s Choice", Description:"BBQ Sauce Base, House Cheese Blend, Chicken Breast, Raw Red Onions, & Sliced Jalapenos.", Price:"12 | $18", Category:"House Pizzas"},
  {Name:"Kid", Description:"Base Price listed, +$2 for each topping added", Price:"8", Category:"Build your Own Pizzas"},
  {Name:"Regular", Description:"Base Price listed, +$2 for each topping added", Price:"12", Category:"Build your Own Pizzas"},
  {Name:"Kids Pizza	", Description:"Create your own! There are loads of options up there. Get Creative!", Price:"See CYO Section", Category:"Kid's Menu"},
  {Name:"Mac & Cheese", Description:"It’s like the store stuff, just homemade.", Price:"7", Category:"Kid's Menu"},
  {Name:"Hot Dog", Description:"Plain Hot Dog with Fries, Chips, or Carrots", Price:"6", Category:"Kid's Menu"},
  {Name:"Pepsi Products", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Milk", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Chocolate Milk", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Orange Juice", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Apple Juice", Description:"", Price:"2", Category:"Beverages"},
  {Name:"Iced Tea", Description:"", Price:"2", Category:"Beverages"}
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
