document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.getElementById("events-container");
  const eventsNav = document.getElementById("events-nav");

  const events = [
    { Name: "Live Jazz Night", Description: "Smooth jazz every Friday.", Date: "2025-10-10", Image: "assets/jazz.jpg" },
    { Name: "Trivia Night", Description: "Test your wits every Tuesday.", Date: "2025-10-17", Image: "" },
    { Name: "Open Mic", Description: "Local talent showcase.", Date: "2025-11-05", Image: "assets/openmic.jpg" },
    { Name: "Comedy Night", Description: "Laughs with local comedians.", Date: "2025-11-20", Image: "" },
  ];

  // Generate month-year buttons
  const months = [...new Set(events.map(e => {
    const d = new Date(e.Date);
    return d.toLocaleString('default', { month: 'long', year: 'numeric' });
  }))];

  months.forEach(m => {
    const btn = document.createElement("button");
    btn.textContent = m;
    btn.className = "px-4 py-2 bg-ivy text-ecru rounded shadow hover:bg-rust hover:text-ecru transition font-semibold";
    btn.addEventListener("click", () => showMonth(m));
    eventsNav.appendChild(btn);
  });

  showMonth(months[0]); // default

  function showMonth(month) {
    eventsContainer.innerHTML = "";
    events.filter(e => {
      const d = new Date(e.Date);
      const me = d.toLocaleString('default', { month: 'long', year: 'numeric' });
      return me === month;
    }).forEach(ev => {
      const card = document.createElement("div");
      card.className = "flex flex-col sm:flex-row items-center bg-ecru/90 rounded-2xl shadow-lg p-6 border-l-4 border-gold";

      if (ev.Image && ev.Image.trim() !== "") {
        const img = document.createElement("img");
        img.src = ev.Image;
        img.alt = ev.Name;
        img.className = "h-24 w-24 sm:h-32 sm:w-32 rounded-lg mr-6 mb-4 sm:mb-0 object-cover";
        card.appendChild(img);
      }

      const info = document.createElement("div");
      info.className = "flex flex-col";

      const name = document.createElement("h3");
      name.textContent = ev.Name;
      name.className = "text-xl sm:text-2xl font-bold text-ivy mb-2";
      info.appendChild(name);

      const desc = document.createElement("p");
      desc.textContent = ev.Description;
      desc.className = "text-slate mb-2";
      info.appendChild(desc);

      const date = document.createElement("span");
      const d = new Date(ev.Date);
      date.textContent = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      date.className = "text-rust font-semibold";
      info.appendChild(date);

      card.appendChild(info);
      eventsContainer.appendChild(card);
    });
  }
});
