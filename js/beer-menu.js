const drinkData = [
  {Name:"IPA", Description:"Hoppy beer", Price:"6", Image:"assets/ipa.jpg", Category:"Beer"},
  {Name:"Stout", Description:"Rich & dark", Price:"7", Image:"assets/stout.jpg", Category:"Beer"},
  {Name:"Mojito", Description:"Rum & mint", Price:"8", Image:"assets/mojito.jpg", Category:"Cocktail"},
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
