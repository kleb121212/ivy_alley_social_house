document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.getElementById("events-container");
  const eventsNav = document.getElementById("events-nav");

  // EVENTS — supports one-time & recurring
  const events = [
        // Friday Night Events
    {
      Name: "Trivia Night!",
      Description: "6:30pm: Hosted by Geeks Who Drink! Prizes for top teams!",
      Date: "2026-06-05",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-07-31"
      }
    },
    {
      Name: "",
      Description: "$2 off all Bucket Head Brewery Drafts\n$2 off 12\" Pizzas!",
      Date: "2026-06-05",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-07-31"
      }
    },
    // Thursday Night Events
    {
      Name: "",
      Description: "Hosted by Geeks Who Drink! Prizes for top teams!",
      Date: "2026-04-02",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-06-30"
      }
    },
    {
      Name: "",
      Description: "$2 off all Bucket Head Brewery Drafts\n$2 off 12\" Pizzas!",
      Date: "2026-04-02",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-06-30"
      }
    },
    // Wednesday Night Events
    


    {
      Name: "",
      Description: "25% off Wine\n$2 off Apps\n$15 Beer Buckets",
      Date: "2026-04-01",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-06-30"
      }
    },
    // Tuesday Night Events
 


    {
      Name: "",
      Description: "$3 Tacos\n$5 Draft Margs\n$5 Boliche Lager",
      Date: "2026-04-07",
      Recurrence: {
        type: "weekly",
        interval: 1,
        endDate: "2030-06-30"
      }
    }
  ];

  // Extract unique months from events
  const months = [...new Set(events.map(e => {
    const [y, m] = e.Date.split("-").map(Number);
    return `${y}-${String(m).padStart(2, "0")}`;
  }))];

  // Create month buttons
  months.forEach(m => {
    const [year, month] = m.split("-").map(Number);
    const d = new Date(year, month - 1, 1);
    const label = d.toLocaleString("default", { month: "long", year: "numeric" });

    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "px-3 py-2 bg-ivy text-ecru rounded shadow hover:bg-gold hover:text-dark transition text-sm sm:text-base";
    btn.addEventListener("click", () => showMonth(m));
    eventsNav.appendChild(btn);
  });

  // Default month
  showMonth(months[0]);

  // MAIN CALENDAR FUNCTION
  function showMonth(monthKey) {
    eventsContainer.innerHTML = "";

    const [year, month] = monthKey.split("-").map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    // Month title (top-left)
    const monthTitle = document.createElement("h2");
    monthTitle.textContent = new Date(year, month - 1, 1).toLocaleString("default", {
      month: "long",
      year: "numeric"
    });
    monthTitle.className = "text-3xl font-bold text-ivy text-center mt-4";
    eventsContainer.appendChild(monthTitle);

    const monthEvents = expandRecurringEvents(events, year, month, lastDay);

    // ⭐ MOBILE-FRIENDLY GRID: 3 columns on mobile, 7 on desktop
    const calendar = document.createElement("div");
    calendar.className = "grid grid-cols-3 sm:grid-cols-7 gap-2 mt-2";

    // Weekday headers (short on mobile)
    const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];
    const weekdayLabelsFull = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    weekdayLabels.forEach((day, i) => {
      const header = document.createElement("div");
      header.innerHTML = `
        <span class="sm:hidden">${day}</span>
        <span class="hidden sm:inline">${weekdayLabelsFull[i]}</span>
      `;
      header.className = "text-center font-bold text-dark text-xs sm:text-base bg-ecru py-1 border-b border-ivy/30";
      calendar.appendChild(header);
    });

    // Empty cells before first day
    for (let i = 0; i < firstDay.getDay(); i++) {
      const empty = document.createElement("div");
      calendar.appendChild(empty);
    }

    // Days of month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const cell = document.createElement("div");
      cell.className = "border border-ivy/40 rounded-lg p-2 bg-ecru min-h-[90px] sm:min-h-[110px] shadow-sm";

      const dateLabel = document.createElement("div");
      dateLabel.textContent = day;
      dateLabel.className = "font-semibold text-ivy text-sm sm:text-base";
      cell.appendChild(dateLabel);

      // Events for this day
      const todaysEvents = monthEvents.filter(ev => {
        const [, , d] = ev.Date.split("-").map(Number);
        return d === day;
      });

      todaysEvents.forEach(ev => {
        const evBtn = document.createElement("button");
        evBtn.textContent = ev.Name;
        evBtn.className = "block mt-1 text-xs sm:text-sm text-rust underline hover:text-ivy break-words";
        evBtn.addEventListener("click", () => openEventModal(ev));
        cell.appendChild(evBtn);
      });

      calendar.appendChild(cell);
    }

    eventsContainer.appendChild(calendar);
  }

  // EXPAND RECURRING EVENTS INTO REAL DATES
  function expandRecurringEvents(events, year, month, lastDay) {
    const results = [];

    events.forEach(ev => {
      const [sy, sm, sd] = ev.Date.split("-").map(Number);
      const start = new Date(sy, sm - 1, sd);

      // One-time event
      if (!ev.Recurrence) {
        if (sy === year && sm === month) {
          results.push(ev);
        }
        return;
      }

      // Recurring event
      const recur = ev.Recurrence;

      let end = null;
      if (recur.endDate) {
        const [ey, em, ed] = recur.endDate.split("-").map(Number);
        end = new Date(ey, em - 1, ed);
      }

      for (let day = 1; day <= lastDay.getDate(); day++) {
        const current = new Date(year, month - 1, day);

        if (current < start) continue;
        if (end && current > end) continue;

        let matches = false;

        switch (recur.type) {
          case "daily":
            matches = true;
            break;

          case "weekly":
            const diffDays = Math.floor((current - start) / (1000 * 60 * 60 * 24));
            matches = diffDays % (7 * recur.interval) === 0;
            break;

          case "monthly":
            matches =
              current.getDate() === start.getDate() &&
              (current.getMonth() - start.getMonth() +
                12 * (current.getFullYear() - start.getFullYear())) %
                recur.interval === 0;
            break;
        }

        if (matches) {
          results.push({
            ...ev,
            Date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
          });
        }
      }
    });

    return results;
  }

  // MODAL POPUP
  function openEventModal(event) {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50";

    const box = document.createElement("div");
    box.className = "bg-ecru p-6 rounded-xl shadow-xl max-w-md w-full";

    const title = document.createElement("h2");
    title.textContent = event.Name;
    title.className = "text-2xl font-bold text-ivy mb-2";

    const desc = document.createElement("p");
    desc.innerHTML = event.Description.replace(/\n/g, "<br>");
    desc.className = "text-slate mb-4";

    const date = document.createElement("p");
    date.textContent = new Date(event.Date).toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    date.className = "text-rust font-semibold mb-4";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.className = "px-4 py-2 bg-rust text-ecru rounded hover:bg-ivy transition";
    closeBtn.addEventListener("click", () => modal.remove());

    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(date);
    box.appendChild(closeBtn);
    modal.appendChild(box);
    document.body.appendChild(modal);
  }
});