const drinkData = [
  {Name:"Alley Ale", Description:"Pale Ale. ABV. IBU. Moderately malty & hopped with Centennial & Cascade.", Price:"6 (16oz) | $18 (Growler)", Category:"House Brewed Beer"},
  {Name:"Bolera Lager", Description:"Mexican Amber Lager. ABV. IBU. An easy drinking, traditional Mexican-style Amber lager with a sweet malt backbone & light hop spices", Price:"6 (16oz) | $18 (Growler)", Category:"House Brewed Beer"},
  {Name:"Renaissance", Description:"NEIPA. ABV. IBU. A fruity IPA with notes of passionfruit, pineapple, & orange. Hopped with Galaxy, Citra, & Sabro.", Price:"8 (16oz) | $20 (Growler)", Category:"House Brewed Beer"},
  {Name:"Vanilliam Street", Description:"Dunkel Bock. ABV. IBU Rested on Madagascar Vanilla. Moderate body with notes of malt & dark fruit.", Price:"8 (16oz) | $20 (Growler)", Category:"House Brewed Beer"},
  {Name:"Morning Coffee*", Description:"Imperial Stout. ABV. IBU. Heavy stout with Coffee, Chocolate, Madagascar Vanilla, & Maple.", Price:"10 (16oz) | $22 (Growler)", Category:"House Brewed Beer"},
  {Name:"Barley There*", Description:"English Barleywine. ABV. A rich beer to warm you up on cold nights with notes of caramel, pit fruit, & complex malt.", Price:"5 (6oz) | $10 (13oz) | $30 (Growler)", Category:"House Brewed Beer"},
  {Name:"Holiday Spice", Description:"Christmas Ale. ABV. IBU. A winter warmer with baking spices, orange, & honey.", Price:"8 (16oz) | $20 (Growler)", Category:"House Brewed Beer"},
  {Name:"Gratzer (Exotic Line)*", Description:"Grodziskie (Gratzer) ABV. A light & crisp ale with slight smoke & moderate hop characteristic.", Price:"4 (6oz) | $8 (13oz) | $24 (Growler)", Category:"House Brewed Beer"},
  {Name:"5 Beer Flight", Description:"5 oz pour of any 5 beers. Beers denoted with a *, are $1 extra.", Price:"14", Category:"House Brewed Beer"},
  {Name:"You Pick Seltzer", Description:"Plain Seltzer. ABV. IBU. Choose Your Flavors! (Up to 3): Blackberry, Blood Orange, Cherry, Coconut, Dragon Fruit, Mango, Peach, Pineapple, Pomegranate, Raspberry, or Strawberry", Price:"8", Category:"Guest Taps"},
  {Name:"Non-Alcoholic (All 12 oz)", Description:"Atletica: Mexican Light Lager", Price:"6", Category:"Canned Beer"},
  {Name:"Domestics (All 16 oz)", Description:"Bud Light, Budweiser, Busch Light, Coors, Coors Light, Michelob Ultra, Yuengling, Yuengling Light", Price:"6", Category:"Canned Beer"},
  {Name:"Imports (All 16 oz)", Description:"Heineken, Stella Artois", Price:"7", Category:"Canned Beer"},
  {Name:"Old Fashioned", Description:"A Classic cocktail made with Indiana Whiskey Company Bourbon", Price:"10", Category:"Cocktails"},
  {Name:"Kentucky Duck", Description:"Bourbon, Ginger Beer, & Lime", Price:"9", Category:"Cocktails"},
  {Name:"Margarita on Tap", Description:"Your choice between: Lime, Strawberry, Pineapple, or Pomegranate", Price:"8", Category:"Cocktails"},
  {Name:"Pomegranate Gin & Tonic", Description:"Made with Long Road Distillery Gin", Price:"9", Category:"Cocktails"},
  {Name:"Tropical Duck", Description:"Dark Rum, Pineapple, Orange, & Coconut", Price:"10", Category:"Cocktails"},
  {Name:"Slow Roller", Description:"Orange Juice, Mezcal, Honey, Cinnamon, & Ginger", Price:"9", Category:"Cocktails"},
  {Name:"Alley Antics", Description:"Jack Daniels, Amaretto, Vanilla, & Orange Juice", Price:"11", Category:"Cocktails"},
  {Name:"Ms. Pearl's Cocktail", Description:"Our version of a Bee's Knees Cocktail with Mezcal & Elderflower Liqueur.", Price:"11", Category:"Cocktails"},
  {Name:"Finster's Punch", Description:"Dark Rum, Orange Liqueur, Pineapple Juice, Lime Juice, Grenadine, and a dash of Angostura, topped with Prosecco.", Price:"10", Category:"Cocktails"},
  {Name:"House White", Description:"A slightly sweet & citrus wine to go with any meal.", Price:"6 (Glass) | $16 (Bottle)", Category:"Wines"},
  {Name:"House Red", Description:"A robust cabernet with notes of dark fruit.", Price:"6 (Glass) | $16 (Bottle)", Category:"Wines"},
  {Name:"Running Vines Triathlon (Local)", Description:"Chesterton, IN", Price:"30 (Bottle)", Category:"Wines"}
];

const container = document.getElementById('drink-menu-container');
const nav = document.getElementById('drink-menu-nav');

const categories = [...new Set(drinkData.map(d => d.Category))];

categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.className = 'px-4 py-2 bg-ivy text-ecru rounded hover:bg-rust transition font-semibold';
  btn.addEventListener('click', () => showCategory(cat));
  nav.appendChild(btn);
});

container.innerHTML = `<p class="text-center text-lg text-dark/70">Please select a category above.</p>`;

function showCategory(category) {
  container.innerHTML = '';
  const items = drinkData.filter(d => d.Category === category);
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
